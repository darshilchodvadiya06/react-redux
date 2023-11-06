import { takeLatest } from "redux-saga/effects";
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, UPDATE_PRODUCT_PROGRESS } from "../../product/action/action";
import { handleDeleteProduct, handleGetProduct, handlePostProduct, handleUpdateProduct } from "../manageProduct/manageProduct";

//get category data
export function* getProductSaga () {
    yield takeLatest (GET_PRODUCT_PROGRESS , handleGetProduct)
}

//post category data
export function* postProductSaga () {
    yield takeLatest (POST_PRODUCT_PROGRESS , handlePostProduct)
}

//delete category data
export function* deleteProductSaga () {
    yield takeLatest (DELETE_PRODUCT_PROGRESS , handleDeleteProduct)
}

//update category data
export function* updateProductSaga () {
    yield takeLatest (UPDATE_PRODUCT_PROGRESS , handleUpdateProduct)
}