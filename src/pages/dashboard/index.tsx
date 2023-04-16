import Layout from '#components/Layout';
import type { ApplicationState } from '#components/ReduxProvider/_store';
import RepoCard from '#components/RepoCard';
import { Grid } from '@mui/material';
import { map } from 'lodash/fp';
import React from 'react';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const repos = useSelector((x: ApplicationState) => x.repos.repos);

  return (
    <Layout>
      <Grid
        container
        direction="column"
        sx={{
          height: '100%',
          p: 1,
        }}
        rowSpacing={1}
      >
        {map(
          (repo) => (
            <Grid item>
              <RepoCard repository={repo} />
            </Grid>
          ),
          repos,
        )}
      </Grid>
    </Layout>
  );
};

export default DashboardPage;
