import {
  getAllProducts,
  updateProductById,
  deleteProductById,
  addBulkProducts,
  getCsvFileNames,
  setSelectedCsvData,
  deleteCsv,
} from "../../Api";
import { ProductActionTypes } from "./types";

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: ProductActionTypes.CLEAR_ERROR });
};

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.LOADING_TRUE });

    const { data } = await getAllProducts();
    dispatch({ type: ProductActionTypes.FETCH_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ProductActionTypes.CLEAR_ERROR });
    dispatch({ type: ProductActionTypes.FETCH_PRODUCT_ERROR, payload: error });
  }
};

export const getCsv = () => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.FETCH_PRODUCT_CSV_NAME_LOADING });

    const { data } = await getCsvFileNames();
    dispatch({
      type: ProductActionTypes.FETCH_PRODUCT_CSV_NAME,
      payload: data?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ProductActionTypes.CLEAR_ERROR });
    dispatch({
      type: ProductActionTypes.FETCH_PRODUCT_CSV_NAME_ERROR,
      payload: error,
    });
  }
};
export const DeleteCsv = (id) => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.SET_PRODUCT_CSV_LOADING });

    const { status } = await deleteCsv(id);
    if (status === 200) {
      dispatch(getCsv());
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: ProductActionTypes.CLEAR_ERROR });
    dispatch({
      type: ProductActionTypes.SET_PRODUCT_CSV_ERROR,
      payload: error,
    });
  }
};
export const SetCsvData = (id, toggle) => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.SET_PRODUCT_CSV_LOADING });

    const { data, status } = await setSelectedCsvData(id);
    dispatch({
      type: ProductActionTypes.SET_PRODUCT_CSV,
      payload: data,
    });
    if (status === 200) {
      dispatch(getCsv());
      dispatch(getProducts());
      toggle();
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: ProductActionTypes.CLEAR_ERROR });
    dispatch({
      type: ProductActionTypes.SET_PRODUCT_CSV_ERROR,
      payload: error,
    });
  }
};
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.LOADING_TRUE });

    const { data } = await deleteProductById(id);
    dispatch({ type: ProductActionTypes.DELETE_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ProductActionTypes.CLEAR_ERROR });
    dispatch({ type: ProductActionTypes.DELETE_PRODUCT_ERROR, payload: error });
  }
};

export const addBulkProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.LOADING_TRUE });

    const { data } = await addBulkProducts(product);
    dispatch({ type: ProductActionTypes.ADD_PRODUCT, payload: data });
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: ProductActionTypes.CLEAR_ERROR });
    dispatch({
      type: ProductActionTypes.ADD_PRODUCT_ERROR,
      payload: error.response.data,
    });
  }
};

export const updateProduct = (id, product) => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.LOADING_TRUE });

    const { data } = await updateProductById(id, product);
    dispatch({ type: ProductActionTypes.UPDATE_PRODUCT, payload: data });
  } catch (error) {
    dispatch({ type: ProductActionTypes.CLEAR_ERROR });
    dispatch({ type: ProductActionTypes.UPDATE_PRODUCT_ERROR, payload: error });
  }
};

// clear messages
// export const clearMessages = () => async (dispatch) =>
//   dispatch({ type: ProductActionTypes.CLEAR_MESSAGE });
