import type { Repository } from '#domain/entity/repos/models/Repository';

export default class RepositoryService {
  repositories: Record<string, Repository> = {};

  public addRepository(repository: Repository) {
    this.repositories[repository.name] = repository;
  }
}
