import RepositoryAvatar from '#components/RepositoryAvatar';
import startRepositoryCommand from '#domain/repos/events/startRepositoryCommand';
import type { Repository } from '#domain/repos/models/Repository';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import { useToggle } from '@react-shanties/core';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export type RepoCardProps = {
  repository: Repository
};

const RepoCard = ({
  repository: repo,
}: RepoCardProps) => {
  const [expanded, toggleExpanded] = useToggle(false);
  const toggle = useCallback(
    () => toggleExpanded(),
    [toggleExpanded],
  );

  const dispatch = useDispatch();
  const start = useCallback(
    () => dispatch(startRepositoryCommand(repo)),
    [dispatch, repo],
  );

  return (
    <Card>
      <CardHeader
        avatar={<RepositoryAvatar repository={repo} />}
        title={repo.name}
        subheader={repo.currentBranch}
        action={<Button variant="contained" onClick={start}>Start</Button>}
        onClick={toggle}
        sx={{
          cursor: 'pointer',
          '.MuiCardHeader-action': {
            m: 0,
          },
        }}
      />
      <CardContent
        sx={{
          transition: '.3s ease-in-out all',
          maxHeight: expanded ? 'auto' : 0,
          p: expanded ? '16px' : 0,
          '&&': {
            pb: expanded ? '24px' : 0,
          },
        }}
      />
    </Card>
  );
};

export default RepoCard;
