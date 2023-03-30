import React, { useCallback } from 'react';
import type { PropsWithChildren } from 'react';
import { Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import applyStorysetCommand from '#domain/dashboard/events/applyStorysetCommand';

export type LayoutProps = PropsWithChildren<{}>;

const Layout = ({
  children,
}: LayoutProps) => {
  const dispatch = useDispatch();
  const loadStorySet = useCallback(
    () => {
      dispatch(applyStorysetCommand({
        storySet: {
          name: 'Test',
          branchName: 'feat/test',
          repositories: ['Git Dev 1'],
        },
      }));
    },
    [dispatch],
  );

  return (
    <Grid container sx={{ height: '100%', width: '100%' }}>
      <Grid
        item
        sx={{
          width: 300,
          borderRight: '1px solid',
          borderRightColor: 'blueGrey.200',
        }}
      >
        <Button onClick={loadStorySet}>Load Story Set</Button>
      </Grid>
      <Grid item flex="1 0 0%">
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
