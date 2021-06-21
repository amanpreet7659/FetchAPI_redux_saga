import { Logger } from 'logger';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddlewar from 'redux-saga'
import { onLoadpost } from './app.sagas';
import rootReducer from './rootReducer';

const sagaMiddlaware= createSagaMiddlewar();

const middlewares=[Logger,sagaMiddlaware]

const store=createStore(rootReducer,applyMiddleware(...middlewares))
sagaMiddlaware.run(onLoadpost)

export default store