import type { IpcMainEvent } from 'electron';

export type Listener<T> = (event: IpcMainEvent, payload: T) => any;

export { default as init } from './init';
export { default as gitCommand } from './gitCommand';
