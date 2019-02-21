import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from '@/redux'
import APIMiddleware from '@/middleware/APIMiddleware'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState, 
    compose(
      applyMiddleware(
        thunk, //允许使用dispatch 函数
        APIMiddleware,
        createLogger() //便捷的middleware，用来打印action 日志
        )
    )
  )

  if (module.hot) {
    module.hot.accept('@/redux', () => store.replaceReducer(rootReducer))
  }

  return store;
};

export default configureStore;