import { all, fork } from 'redux-saga/effects';
import home from '../views/home/saga/index';

export default function* rootSaga() {
  yield all([ // 同时并发多个
    ...home
  ])
}