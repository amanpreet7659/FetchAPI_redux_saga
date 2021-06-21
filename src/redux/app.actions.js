import { LOAD_POST_FAIL, LOAD_POST_START, LOAD_POST_SUCCESS } from "./Constants"

export const loadPostStart=()=>({
    type:LOAD_POST_START,
})

export const loadPostSuccess=(posts)=>({
    type:LOAD_POST_SUCCESS,
    payload:posts
})

export const loadPostFail=(err)=>({
    type:LOAD_POST_FAIL,
    payload:err
})