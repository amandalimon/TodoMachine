import React from 'react';
import { TodoIcon } from './';

function EditIcon({ onEdit }) {
  return (
    <TodoIcon
      type="edit"
      color="white"
      onClick={onEdit}
    />
  );
}

export { EditIcon };