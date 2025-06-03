import { ADD_SEARCH, setSearchError } from '../actions/searchActions';
import { catchError, map } from 'rxjs/operators';

import { of } from 'rxjs';
import { ofType } from 'redux-observable';

export const logSearchEpic = (action$) =>
  action$.pipe(
    ofType(ADD_SEARCH),
    map((action) => {
      console.log("Searched:", action.payload.description);
      return { type: 'SEARCH_LOGGED' }; // for analytics
    }),
    catchError((err) => of(setSearchError(err.message)))
  );
