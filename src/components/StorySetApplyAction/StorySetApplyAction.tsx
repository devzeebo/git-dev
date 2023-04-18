import { Download } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import type { MouseEvent } from 'react';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import applyStorysetCommand from '#domain/app/dashboard/events/applyStorysetCommand';
import { useNavigate } from 'react-router';
import type { StorySet } from '#domain/entity/repos/models/StorySet';

export type StorySetApplyActionProps = {
  storySet: StorySet
};

const StorySetApplyAction = ({
  storySet,
}: StorySetApplyActionProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apply = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      dispatch(applyStorysetCommand({ storySet }));

      navigate('/');
    },
    [dispatch, navigate, storySet],
  );

  return (
    <IconButton onClick={apply}>
      <Download />
    </IconButton>
  );
};

export default StorySetApplyAction;
