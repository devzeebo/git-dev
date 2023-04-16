import type { Repository } from '#domain/entity/repos/models/Repository';
import { DeveloperBoard, DeveloperBoardOff } from '@mui/icons-material';
import { Avatar, Icon } from '@mui/material';
import React from 'react';

export type RepositoryAvatarProps = {
  repository: Repository
};

const RepositoryAvatar = ({
  repository: repo,
}: RepositoryAvatarProps) => (
  <Avatar
    sx={{ bgcolor: repo.pid ? 'success.main' : 'error.main' }}
  >
    <Icon>
      {repo.pid
        ? <DeveloperBoard />
        : <DeveloperBoardOff />}
    </Icon>
  </Avatar>
);

export default RepositoryAvatar;
