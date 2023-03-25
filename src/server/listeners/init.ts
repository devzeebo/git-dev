import settingsLoadedEvent from '#domain/config/events/settingsLoadedEvent';
import type { IpcMainEvent } from 'electron';
import type { Listener } from '.';

const listener: Listener<any> = (event: IpcMainEvent) => {
  event.sender.send('to-redux', settingsLoadedEvent({
    label: 'world',
  }));
};

export default {
  channel: 'init',
  listener,
};
