import type { Repository } from '#domain/entity/repos/models/Repository';
import { Pause, PlayArrow } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import type { MouseEvent } from 'react';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import startRepositoryCommand from '#domain/entity/repos/events/startRepositoryCommand';
import stopRepositoryCommand from '#domain/entity/repos/events/stopRepositoryCommand';

export type RepoCardPlayActionProps = {
  repository: Repository
};

const RepoCardPlayAction = ({
  repository: repo,
}: RepoCardPlayActionProps) => {
  const dispatch = useDispatch();
  const start = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      dispatch(startRepositoryCommand(repo));
    },
    [dispatch, repo],
  );
  const stop = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      dispatch(stopRepositoryCommand({ repository: repo.name }));
    },
    [dispatch, repo],
  );

  return (
    <IconButton onClick={repo.pid ? stop : start}>
      {repo.pid ? <Pause /> : <PlayArrow />}
    </IconButton>
  );
};

export default RepoCardPlayAction;
