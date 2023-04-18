import { AutoStories } from '@mui/icons-material';
import { Avatar, Icon } from '@mui/material';
import React from 'react';
import type { StorySet } from '#domain/entity/repos/models/StorySet';

export type StorySetAvatarProps = {
  storySet: StorySet
};

const StorySetAvatar = ({
  storySet,
}: StorySetAvatarProps) => (
  <Avatar>
    <Icon>
      <AutoStories />
    </Icon>
  </Avatar>
);

export default StorySetAvatar;
