import Layout from '#components/Layout';
import StorySetCard from '#components/StorySetCard';
import { StorySetSelectors } from '#domain/entity/storySets/reducers';
import { Grid } from '@mui/material';
import { map } from 'lodash/fp';
import React from 'react';
import { useSelector } from 'react-redux';

const StorySetPage = () => {
  const storySets = useSelector(StorySetSelectors.selectAll);

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
          (storySet) => (
            <Grid item key={storySet.name}>
              <StorySetCard storySet={storySet} />
            </Grid>
          ),
          storySets,
        )}
      </Grid>
    </Layout>
  );
};

export default StorySetPage;
