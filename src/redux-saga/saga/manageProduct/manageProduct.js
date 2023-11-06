import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_SUCCESS } from "../../product/action/action";
import { deleteProduct, getProduct, postProduct, updateProduct } from "../../product/api/api";
import { call, put } from "redux-saga/effects";
//handleGetProduct
export function* handleGetProduct(action) {
    try {
        const res = yield call(getProduct, action);
        const status = res.status;
        const data = res.data;
        if (status === 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: GET_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: GET_PRODUCT_ERROR, e });
    }
}
//handlePostProduct
export function* handlePostProduct(action) {
    try {
        const res = yield call(postProduct, action);
        const status = res.status;
        const data = res.data;
        // console.log(data, "this is from manageProduct");
        if (status === 201) {
            yield put({ type: POST_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: POST_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: POST_PRODUCT_ERROR, e });
    }
}
//handleDeleteProduct
export function* handleDeleteProduct(action) {
    try {
        const res = yield call(deleteProduct, action);
        const status = res.status;
        const data = res.data;
        // console.log(data, "this is from delete manageProduct");
        if (status === 200) {
            yield put({ type: DELETE_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: DELETE_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: DELETE_PRODUCT_ERROR, e });
    }
}
//handleUpdateProduct
export function* handleUpdateProduct(action) {
    try {
        const res = yield call(updateProduct, action);
        const status = res.status;
        const data = res.data;
        // console.log(data, "this is from update manageProduct");
        if (status === 200) {
            yield put({ type: UPDATE_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: UPDATE_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: UPDATE_PRODUCT_ERROR, e });
    }
}