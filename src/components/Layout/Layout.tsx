import React from 'react';
import type { PropsWithChildren } from 'react';
import { Grid } from '@mui/material';

export type LayoutProps = PropsWithChildren<{}>;

const Layout = ({
  children,
}: LayoutProps) => (
  <Grid container>
    <Grid item sx={{ width: 300 }}>
      Menu
    </Grid>
    <Grid item flex="1 0 0%">
      {children}
    </Grid>
  </Grid>
);

export default Layout;
