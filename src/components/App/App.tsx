import type { ApplicationState } from '#components/ReduxProvider/_store';
import { map } from 'lodash/fp';
import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const repos = useSelector((x: ApplicationState) => x.repos.repos);

  return (
    <div>
      Hello,
      {' '}
      {map(
        (repo) => (
          <>
            <div>{repo.name}</div>
            <div>{repo.path}</div>
            <div>
              On Branch:
              {' '}
              {repo.status.current}
            </div>
          </>
        ),
        repos,
      )}
    </div>
  );
};

export default App;
