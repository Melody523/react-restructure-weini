import { call, takeEvery, put, fork } from 'redux-saga/effects';
import { indexMobileTop, indexHotList } from '../../../network/home';
import * as ActionType from './contants';

function* SetIsActive(isActive) {
  try {
    yield put({ type: ActionType.IS_ACTIVE, isActive: isActive });
  } catch (e) {
   
  }
}

function* HotList() {
  try {
    const res = yield call(indexHotList)
    yield put({ type: ActionType.HOT_LIST, hotList: res.result });
  } catch (e) {
   
  }
}

function* IndexMobileTop() {
  const result = yield call(indexMobileTop)
  const res =  result.result
  yield put({ type: ActionType.INDEX_MOBILE_TOP, bannerList: res.banner, hotSearch: res.hotSearch, subject: res.subject, newSubject: res.newSubject });
}

function* getHotList() {
  yield takeEvery('getHotList', HotList); // 正在加载数据
}

function* getIndexMobileTop() {
  yield takeEvery('getIndexMobileTop', IndexMobileTop);
}

function* SetIsActiveVal() {
  yield takeEvery('SetIsActive', SetIsActive);
}

// 使用数组导出
const homeSage = [
  SetIsActiveVal(),
  getHotList(),
  getIndexMobileTop()
]

export default homeSage;