import RepoCardPlayAction from '#components/RepoCardPlayAction';
import RepositoryAvatar from '#components/RepositoryAvatar';
import type { Repository } from '#domain/entity/repos/models/Repository';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
} from '@mui/material';
import { useToggle } from '@react-shanties/core';
import React, { useCallback } from 'react';

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

  return (
    <Card>
      <CardHeader
        avatar={<RepositoryAvatar repository={repo} />}
        title={repo.name}
        subheader={(
          <Grid container justifyContent="space-between" sx={{ pr: '1em' }}>
            <Grid item>{repo.currentBranch}</Grid>
            {repo.pid ? <Grid item>{repo.pid}</Grid> : null}
          </Grid>
        )}
        action={<RepoCardPlayAction repository={repo} />}
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
          transition: '.1s ease-in-out all',
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
