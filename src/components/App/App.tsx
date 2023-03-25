import type { ApplicationState } from '#components/ReduxProvider/_store';
import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const label = useSelector((x: ApplicationState) => x.config.settings.label);

  return (
    <div>
      Hello,
      {' '}
      {label}
    </div>
  );
};

export default App;
