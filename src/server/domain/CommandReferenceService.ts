import type { ChildProcess } from 'child_process';
import {
  concat,
  find,
  without,
} from 'lodash/fp';

export type CommandReference = {
  repository: string,
  process: ChildProcess,
};

export class CommandReferenceService {
  public commands: CommandReference[] = [];

  public addCommand(repo: string, process: ChildProcess): void {
    this.commands = concat({
      repository: repo,
      process,
    }, this.commands);
  }

  public removeCommand(pid: number) {
    const commandRef = find(
      (cr) => cr.process.pid === pid,
      this.commands,
    ) as CommandReference | undefined;

    if (!commandRef) {
      throw new Error(`process ${pid} not found`);
    }

    if (!commandRef.process.exitCode) {
      commandRef.process.kill();
    }

    this.commands = without([commandRef], this.commands);
  }

  public stopRepository(repository: string) {
    const commandRef = find(
      (cr) => cr.repository === repository,
      this.commands,
    ) as CommandReference | undefined;

    if (!commandRef) {
      throw new Error(`process for ${repository} not found`);
    }

    if (!commandRef.process.exitCode) {
      commandRef.process.kill();
    }
  }
}
