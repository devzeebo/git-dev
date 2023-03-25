// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IpcRendererEvent } from 'electron';
import { ipcRenderer } from 'electron';

export type WindowDispatchEvent<T> = CustomEvent<PayloadAction<T>>;

process.once('loaded', () => {
  window.addEventListener('message', (event) => {
    const message: PayloadAction = event.data;

    ipcRenderer.send(message.type, message);
  });

  ipcRenderer.on('to-redux', <T>(_: IpcRendererEvent, action: PayloadAction<T>) => {
    const event = new CustomEvent('dispatch', { detail: action });

    window.dispatchEvent(event);
  });
});
