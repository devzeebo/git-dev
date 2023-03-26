import settingsLoadedEvent from '#domain/config/events/settingsLoadedEvent';
import type { IpcMainEvent } from 'electron';
import path from 'path';
import fs from 'fs';
import type { Listener } from '.';

const listener: Listener<any> = async (event: IpcMainEvent) => {
  const configFile = path.join(process.cwd(), 'config.json');
  if (fs.existsSync(configFile)) {
    const config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));

    event.sender.send('to-redux', settingsLoadedEvent(config));
  }
};

export default {
  channel: 'init',
  listener,
};
