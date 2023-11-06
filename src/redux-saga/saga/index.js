import { all } from "@redux-saga/core/effects";
import { deleteProductSaga, getProductSaga, postProductSaga, updateProductSaga } from "./root/rootProductSaga";

export function* rootSaga() {
    yield all([getProductSaga() , postProductSaga() , deleteProductSaga(),updateProductSaga()]);
  }