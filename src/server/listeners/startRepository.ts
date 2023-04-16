import type { IpcMainEvent } from 'electron';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Repository } from '#domain/entity/repos/models/Repository';
import { spawn } from 'child_process';
import { isString } from 'lodash/fp';
import repositoryStartedEvent from '#domain/entity/repos/events/repositoryStartedEvent';
import startRepositoryCommand from '#domain/entity/repos/events/startRepositoryCommand';
import type { CommandReferenceService } from 'server/domain/CommandReferenceService';
import repositoryStoppedEvent from '#domain/entity/repos/events/repositoryStoppedEvent';
import type { Listener } from '.';

export default (
  commandService: CommandReferenceService,
) => {
  const listener: Listener<any> = async (
    event: IpcMainEvent,
    { payload }: PayloadAction<Repository>,
  ) => {
    const { cmd, args } = isString(payload.commands.run)
      ? {
        cmd: payload.commands.run,
        args: [],
      }
      : payload.commands.run;

    const runningCommand = spawn(cmd, args, {
      cwd: payload.path,
    });

    runningCommand.on('exit', () => {
      commandService.removeCommand(runningCommand.pid!);
      event.sender.send('to-redux', repositoryStoppedEvent({
        repository: payload.name,
      }));
    });

    runningCommand.on('error', console.error);

    runningCommand.on('spawn', () => {
      commandService.addCommand(payload.name, runningCommand);

      event.sender.send('to-redux', repositoryStartedEvent({
        repository: payload.name,
        pid: runningCommand.pid!,
      }));
    });
  };

  return {
    channel: startRepositoryCommand.type,
    listener,
  };
};
