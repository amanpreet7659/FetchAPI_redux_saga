import {takeLatest,call,put,} from 'redux-saga/effects'
import { localApi } from "./api"
import { loadPostFail, loadPostSuccess } from "./app.actions";

export function* onLoadPostStartAsync(){
    try{
        const response=yield call(localApi);
        yield put(loadPostSuccess(response.data))
    }
    catch(err){
        yield put(loadPostFail(err))
    }
}

export function* onLoadpost(){
    yield takeLatest('LOADING_POST_START ',onLoadPostStartAsync)
}