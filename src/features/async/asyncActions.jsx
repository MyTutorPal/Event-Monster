import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISHED,
  ASYNC_ACTION_ERROR
} from './asyncConstants';

export const asyncActionStart = () => {
  return {
    type: ASYNC_ACTION_START
  };
};

export const asyncActionFinished = () => {
  return {
    type: ASYNC_ACTION_FINISHED
  };
};

export const asyncActionError = () => {
  return {
    type: ASYNC_ACTION_ERROR
  };
};
