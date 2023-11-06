import {
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_PROGRESS,
    DELETE_PRODUCT_SUCCESS,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_PROGRESS,
    GET_PRODUCT_SUCCESS,
    POST_PRODUCT_ERROR,
    POST_PRODUCT_PROGRESS,
    POST_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_ERROR,
    UPDATE_PRODUCT_PROGRESS,
    UPDATE_PRODUCT_SUCCESS
} from "../action/action"

const initialState = {
    product: [],
    getProductProgress: false,
    getProductError: null,

    postProductProgress: false,
    postProductError: null,

    deleteProductProgress: false,
    deleteProductError: null,

    updateProductProgress: false,
    updateProductError: null,

    dataIsLoaded: false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {

        // get product
        case GET_PRODUCT_PROGRESS:
            {
                return {
                    ...state,
                    getProductProgress: true,
                    getProductError: null,
                    dataIsLoaded: false
                };
            }
        case GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                getProductProgress: false,
                getProductError: null,
                product: action.data,
                dataIsLoaded: false
            };
        }
        case GET_PRODUCT_ERROR: {
            return {
                ...state,
                getProductProgress: false,
                getProductError: action.data,
                dataIsLoaded: false
            };
        }

        //post product
        case POST_PRODUCT_PROGRESS:
            {
                return {
                    ...state,
                    postProductProgress: true,
                    postProductError: null,
                    dataIsLoaded: false
                };
            }
        case POST_PRODUCT_SUCCESS: {
            return {
                ...state,
                postProductProgress: false,
                postProductError: null,
                product: state.product.concat(action.data),
                dataIsLoaded: false
            };
        }
        case POST_PRODUCT_ERROR: {
            return {
                ...state,
                postProductProgress: false,
                postProductError: action.data,
                dataIsLoaded: false
            };
        }

        //delete product
        case DELETE_PRODUCT_PROGRESS:
            {
                return {
                    ...state,
                    deleteProductProgress: true,
                    deleteProductError: null,
                    dataIsLoaded: false
                };
            }
        case DELETE_PRODUCT_SUCCESS: {
            return {
                ...state,
                deleteProductProgress: false,
                deleteProductError: null,
                product: state.product.filter((e) => e.id !== action.data),
                dataIsLoaded: true
            };
        }
        case DELETE_PRODUCT_ERROR: {
            return {
                ...state,
                deleteProductProgress: false,
                deleteProductError: action.data,
                dataIsLoaded: false
            };
        }

        //update product 
        case UPDATE_PRODUCT_PROGRESS: {
            return {
                ...state,
                updateProductProgress: true,
                updateProductError: null,
                dataIsLoaded: false
            };
        }
        case UPDATE_PRODUCT_SUCCESS: {
            return {
                ...state,
                updateProductProgress: false,
                updateProductError: null,
                product: state.product.map((item) => {
                    if (item.id === action.data.id) {
                        return { ...item, ...action.data }
                    } else {
                        return item
                    }
                }),
                dataIsLoaded: true
            };
        }
        case UPDATE_PRODUCT_ERROR: {
            return {
                ...state,
                updateProductProgress: false,
                updateProductError: action.data,
                dataIsLoaded: false
            };
        }


        default: {
            return {
                ...state
            }
        }
    }
}
export default productReducer;