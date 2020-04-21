import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../../server/defaultState';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from  'redux-saga';

const sagaMiddleware = createSagaMiddleware();
console.log(sagaMiddleware);
import * as sagas from './sagas.mock';
import * as mutations from './mutations';

export const store = createStore(
    combineReducers({
      tasks(tasks = defaultState.tasks,action){
          switch(action.type) {
              case mutations.CREATE_TASK:
                console.log(action);
          }
          return tasks;
      }  
    }), applyMiddleware(createLogger(), sagaMiddleware)
)
for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}