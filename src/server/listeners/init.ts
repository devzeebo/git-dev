import settingsLoadedEvent from '#domain/entity/config/events/settingsLoadedEvent';
import type { IpcMainEvent } from 'electron';
import type ConfigService from 'server/domain/ConfigService';

export default (
  configService: ConfigService,
) => {
  const listener = async (event: IpcMainEvent) => {
    configService.loadConfig();

    const workspace = configService.activeWorkspace;

    event.sender.send('to-redux', settingsLoadedEvent({ workspace }));
  };

  return {
    channel: 'init',
    listener,
  };
};
