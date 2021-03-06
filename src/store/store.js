import { createStore, applyMiddleware } from 'redux'; // 中间件和 store
import { Provider } from 'react-redux'; // provider
import { composeWithDevTools } from 'redux-devtools-extension'; // 调试工具
import rootReducer from './reducers'; // reducers

import createSagaMiddleware from 'redux-saga'; // 1：saga 引入createSagaMiddleware
import rootSaga from './saga'; // 5：自己写的根 rootSaga

// 2：创建saga中间件
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools( // 3：把 sagaMiddleware 当做一个中间件，引用调试工具
    applyMiddleware(sagaMiddleware)
  )
)

// 4：启动 saga
sagaMiddleware.run(rootSaga);

export default store