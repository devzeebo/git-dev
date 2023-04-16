import type { Configuration } from '#domain/entity/config/models/Configuration';
import type { Workspace } from '#domain/entity/workspaces/models/Workspace';
import fs from 'fs';
import { forEach } from 'lodash/fp';
import path from 'path';

export default class ConfigService {
  private configFilePath: string = path.join(process.cwd(), 'config.json');

  private disableSaving: boolean = false;

  config: Configuration = {
    lastWorkspace: '',
  };

  activeWorkspace: Workspace = {
    repos: [],
    storySets: [],
  };

  loadConfig(): void {
    const config: Configuration = JSON.parse(fs.readFileSync(this.configFilePath, 'utf-8'));
    this.config = config;

    this.disableSaving = true;

    this.loadWorkspace(config.lastWorkspace);

    this.disableSaving = false;
  }

  loadWorkspace(workspacePath: string): Workspace {
    const workspace: Workspace = JSON.parse(fs.readFileSync(path.join(workspacePath, 'config.json'), 'utf-8'));

    const storySetFiles = fs.readdirSync(path.join(workspacePath, 'storySets'));
    workspace.storySets = [];

    forEach((f) => {
      workspace.storySets.push(JSON.parse(fs.readFileSync(path.join(workspacePath, 'storySets', f), 'utf-8')));
    }, storySetFiles);

    this.activeWorkspace = workspace;
    this.config.lastWorkspace = workspacePath;

    this.save();

    return workspace;
  }

  private save() {
    if (!this.disableSaving) {
      fs.writeFileSync(this.configFilePath, JSON.stringify(this.config), 'utf-8');
    }
  }
}
