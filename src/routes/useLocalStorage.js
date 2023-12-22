import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));

  const {
    synchronizedItem,
    error,
    loading,
    item,
  } = state;

  // ACTION CREATORS
  const onError = (error) => dispatch({
    type: actionTypes.error,
    payload: error,
  });

  const onSuccess = (item) => dispatch({
    type: actionTypes.success,
    payload: item,
  });

  const onSave = (item) => dispatch({
    type: actionTypes.save,
    payload: item,
  });

  const onSynchronize = () => dispatch({
    type: actionTypes.synchronize,
  });

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [initialValue];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem)
      } catch (error) {
        onError(error);
      }
    }, 2000);
  }, [synchronizedItem, itemName, initialValue]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem);
    } catch (error) {
      onError();
    }
  };

  const synchronizeItem = () => {
    onSynchronize();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem,
  };
}

const initialState = ({ initialValue }) => ({
  item: initialValue,
  loading: true,
  error: false,
  synchronizedItem: true,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  synchronize: 'SYNCHRONIZE'
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    item: payload,
    synchronizedItem: true,
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  },
  [actionTypes.synchronize]: {
    ...state,
    synchronizedItem: false,
    loading: true,
  },
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };