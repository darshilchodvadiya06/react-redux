import axios from "axios"
import { BASE_URL, DELETE_PRODUCT_API, GET_PRODUCT_API, POST_PRODUCT_API, UPDATE_PRODUCT_API } from "../../constant"

// get product
export const getProduct = () => {
    return axios.get(BASE_URL + GET_PRODUCT_API).then((res) => {
        // console.log(res, "this is get api");
        const data = res.data;
        const status = res.status;
        return {
            data, status
        };
    })
        .catch((err) => console.log(err));
}

//post product
export const postProduct = (action) => {
    // console.log(action, "post api");
    return axios.post(BASE_URL + POST_PRODUCT_API, action.payload).then((res) => {
        // console.log(res, "this is post api");
        const data = res.data;
        const status = res.status;
        return {
            data, status
        };
    })
        .catch((err) => console.log(err));
}

//delete product
export const deleteProduct = (action) => {
    // console.log(action, "delete api");
    return axios.delete(BASE_URL + DELETE_PRODUCT_API + action.payload).then((res) => {
        // console.log(res, "this is delete api");
        const data = action.payload;
        const status = res.status;
        return {
            data, status
        };
    })
        .catch((err) => console.log(err));
}

// update product
export const updateProduct = (action) => {
    const id = action.payload.id;
    return axios.put(`${BASE_URL}${UPDATE_PRODUCT_API}${id}`, action.payload).then((res) => {
        const data = action.payload;
        const status = res.status;
        return {
            data, status
        };
    })
        .catch((err) => console.log(err));
}