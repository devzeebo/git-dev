import type { IpcMainEvent } from 'electron';
import simpleGit from 'simple-git';
import type { GitCommand } from '#domain/repos/events/gitCommand';
import gitCommand from '#domain/repos/events/gitCommand';
import type { AllowedGitCommands } from '#domain/repos/models/AllowedCommands';
import gitResponse from '#domain/repos/events/gitResponseEvent';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Listener } from '.';

const listener: Listener<any> = async <T extends AllowedGitCommands>(
  event: IpcMainEvent,
  { payload }: PayloadAction<GitCommand<T>>) => {
  const result = await simpleGit(payload.repository.path)[payload.command](...payload.args ?? []);

  event.sender.send('to-redux', (gitResponse as any)(
    payload.repository,
    payload.command,
    result,
  ));
};

export default {
  channel: gitCommand.type,
  listener,
};
