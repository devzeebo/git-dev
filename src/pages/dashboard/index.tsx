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
