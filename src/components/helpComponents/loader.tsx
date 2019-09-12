import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function LinearIndeterminate({}) {
  return (
    <div>
      <LinearProgress />
      <br />
      <LinearProgress color="secondary" />
    </div>
  );
}