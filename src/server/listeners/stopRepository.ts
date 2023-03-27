import type { IpcMainEvent } from 'electron';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Repository } from '#domain/repos/models/Repository';
import type { CommandReferenceService } from 'server/domain/CommandReferenceService';
import repositoryStoppedEvent from '#domain/repos/events/repositoryStoppedEvent';
import type { StopRepositoryCommand } from '#domain/repos/events/stopRepositoryCommand';
import stopRepositoryCommand from '#domain/repos/events/stopRepositoryCommand';
import type { Listener } from '.';

export default (
  commandService: CommandReferenceService,
) => {
  const listener: Listener<any> = async (
    event: IpcMainEvent,
    { payload }: PayloadAction<StopRepositoryCommand>,
  ) => {
    commandService.stopRepository(payload.repository);

    event.sender.send('to-redux', repositoryStoppedEvent({
      repository: payload.repository,
    }));
  };

  return {
    channel: stopRepositoryCommand.type,
    listener,
  };
};
