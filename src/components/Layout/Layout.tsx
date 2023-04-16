import React, { useCallback } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Drawer,
  Grid,
  List,
  ListItem,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import applyStorysetCommand from '#domain/app/dashboard/events/applyStorysetCommand';
import type { ApplicationState } from '#components/ReduxProvider/_store';
import { AutoStories, Code } from '@mui/icons-material';
import RouterListItemButton from '#components/RouterListItemButton/RouterListItemButton';

export type LayoutProps = PropsWithChildren<{}>;

const Layout = ({
  children,
}: LayoutProps) => {
  const dispatch = useDispatch();

  const activeStorySet = useSelector((x: ApplicationState) => x.dashboard.storySet?.name ?? 'None');

  const loadStorySet = useCallback(
    () => {
      dispatch(applyStorysetCommand({
        storySet: {
          name: 'Test',
          branchName: 'feat/test',
          repositories: ['Git Dev 1', 'Git Dev 2'],
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
        <Drawer open variant="permanent">
          <List disablePadding>
            <ListItem disablePadding>
              <RouterListItemButton
                to="/story-sets"
                Icon={AutoStories}
                ListItemTextProps={{
                  primary: 'Story Sets',
                  secondary: `Active: ${activeStorySet}`,
                }}
              />
            </ListItem>
            <ListItem disablePadding>
              <RouterListItemButton
                to="/"
                Icon={Code}
                ListItemTextProps={{
                  primary: 'Repositories',
                  secondary: '15 repositories',
                }}
              />
            </ListItem>
          </List>
        </Drawer>
      </Grid>
      <Grid item flex="1 0 0%" sx={{ backgroundColor: 'blueGrey.50' }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
