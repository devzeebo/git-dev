import type { IpcMainEvent } from 'electron';
import { CommandReferenceService } from 'server/domain/CommandReferenceService';
import ConfigService from 'server/domain/ConfigService';
import startRepositoryFactory from './startRepository';
import stopRepositoryFactory from './stopRepository';
import initFactory from './init';

export type Listener<T> = (event: IpcMainEvent, payload: T) => any;

const commandService = new CommandReferenceService();
const configService = new ConfigService();

export { default as gitCommand } from './gitCommand';

export const init = initFactory(configService);
export const startRepository = startRepositoryFactory(commandService);
export const stopRepository = stopRepositoryFactory(commandService);
