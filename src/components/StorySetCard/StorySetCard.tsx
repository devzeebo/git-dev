import {
  Card,
  CardContent,
  CardHeader,
  Grid,
} from '@mui/material';
import { useToggle } from '@react-shanties/core';
import React, { useCallback } from 'react';
import type { StorySet } from '#domain/entity/storySets/models/StorySet';
import StorySetAvatar from '#components/StorySetAvatar';
import StorySetApplyAction from '#components/StorySetApplyAction';

export type StorySetCardProps = {
  storySet: StorySet,
};

const StorySetCard = ({
  storySet,
}: StorySetCardProps) => {
  const [expanded, toggleExpanded] = useToggle(false);
  const toggle = useCallback(
    () => toggleExpanded(),
    [toggleExpanded],
  );

  return (
    <Card>
      <CardHeader
        avatar={<StorySetAvatar storySet={storySet} />}
        title={storySet.name}
        subheader={(
          <Grid container justifyContent="space-between" sx={{ pr: '1em' }}>
            {storySet.branchName}
          </Grid>
        )}
        action={<StorySetApplyAction storySet={storySet} />}
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

export default StorySetCard;
