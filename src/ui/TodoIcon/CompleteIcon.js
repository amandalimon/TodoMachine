import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? 'darkseagreen' : 'none'}
      strokeColor={completed ? 'white' : 'black'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };