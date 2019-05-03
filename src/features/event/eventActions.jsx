import {
  CREATE_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
  FETCH_EVENTS
} from './eventConstants';
import {
  asyncActionStart,
  asyncActionFinished,
  asyncActionError
} from '../async/asyncActions';
import { fetchSampleDate } from '../../app/data/mockApi';

export const fetchEvents = events => {
  return {
    type: FETCH_EVENTS,
    payload: events
  };
};

export const createEvent = event => {
  return {
    type: CREATE_EVENT,
    payload: {
      event
    }
  };
};

export const updateEvent = event => {
  return {
    type: UPDATE_EVENT,
    payload: {
      event
    }
  };
};

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
};

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      let events = await fetchSampleDate();
      dispatch(fetchEvents(events));
      dispatch(asyncActionFinished());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
};
