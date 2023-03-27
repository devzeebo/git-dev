import type { IpcMainEvent } from 'electron';
import { CommandReferenceService } from 'server/domain/CommandReferenceService';
import startRepositoryFactory from './startRepository';
import stopRepositoryFactory from './stopRepository';

export type Listener<T> = (event: IpcMainEvent, payload: T) => any;

const commandService = new CommandReferenceService();

export { default as init } from './init';
export { default as gitCommand } from './gitCommand';

export const startRepository = startRepositoryFactory(commandService);
export const stopRepository = stopRepositoryFactory(commandService);
