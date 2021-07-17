import * as ActionType from './contants';

const initialState = {
  bannerList: [],
  hotSearch: '',
  subject: [],
  newSubject: [],
  hotList: [],
  isActive: '/'
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.HOT_LIST:
      return state = {
        ...state,
        hotList: action.hotList
      };
    case ActionType.INDEX_MOBILE_TOP:
      return state = {
        ...state,
        bannerList: action.bannerList,
        hotSearch: action.hotSearch,
        subject: action.subject,
        newSubject: action.newSubject
      };
    default:
      return state
  }
}