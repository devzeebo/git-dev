import type { PayloadAction } from '@reduxjs/toolkit';

export type AsyncPayloadAction<
P,
R,
T extends string = string,
> = PayloadAction<P, T, {
  async: {
    resolve: (payload: R) => any,
    reject: (error: Error) => any,
    completedBy: string,
    rejectedBy: string,
  }
}>;
