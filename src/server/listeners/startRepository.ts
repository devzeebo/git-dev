import type { IpcMainEvent } from 'electron';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Repository } from '#domain/repos/models/Repository';
import { spawn } from 'child_process';
import { isString } from 'lodash/fp';
import repositoryStartedEvent from '#domain/repos/events/repositoryStartedEvent';
import startRepositoryCommand from '#domain/repos/events/startRepositoryCommand';
import type { Listener } from '.';

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

  runningCommand.on('error', console.error);

  runningCommand.on('exit', () => {

  });

  event.sender.send('to-redux', repositoryStartedEvent({
    repository: payload.name,
    pid: runningCommand.pid!,
  }));
};

export default {
  channel: startRepositoryCommand.type,
  listener,
};
