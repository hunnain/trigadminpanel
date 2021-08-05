import {
  getAllPresetProducts,
  updatePresetProductById,
  deletePresetProductById,
  addPresetProducts,
  setSelectedPresetProduct
} from "../../Api";
import { PresetProductActionTypes } from "./types";

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: PresetProductActionTypes.CLEAR_ERROR });
};

export const SetPresetProductActive = (id) => async (dispatch) => {
  try {
    dispatch({ type: PresetProductActionTypes.LOADING_TRUE });

    const { data,status } = await setSelectedPresetProduct(id);
    dispatch({ type: PresetProductActionTypes.SET_PRESET_PRODUCT_ACTIVE, payload: data });
    if(status===200){
      dispatch(getPresetProducts())
    }
  } catch (error) {
    dispatch({ type: PresetProductActionTypes.CLEAR_ERROR });
    dispatch({
      type: PresetProductActionTypes.FETCH_PRODUCT_ERROR,
      payload: error,
    });
  }
};

export const getPresetProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PresetProductActionTypes.LOADING_TRUE });

    const { data } = await getAllPresetProducts();
    dispatch({ type: PresetProductActionTypes.FETCH_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PresetProductActionTypes.CLEAR_ERROR });
    dispatch({
      type: PresetProductActionTypes.FETCH_PRODUCT_ERROR,
      payload: error,
    });
  }
};
export const addPresetProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: PresetProductActionTypes.LOADING_TRUE });
    dispatch(setNull());

    const { data } = await addPresetProducts(product);
    dispatch({ type: PresetProductActionTypes.ADD_PRODUCT, payload: data });
    dispatch(getPresetProducts());
  } catch (error) {
    dispatch({ type: PresetProductActionTypes.CLEAR_ERROR });
    dispatch({
      type: PresetProductActionTypes.ADD_PRODUCT_ERROR,
      payload: error.response.data,
    });
  }
};
// delete faq

export const deletePresetProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PresetProductActionTypes.LOADING_TRUE });
    dispatch(setNull());
    const { data } = await deletePresetProductById(id);
    dispatch({ type: PresetProductActionTypes.DELETE_PRODUCT, payload: data });
    dispatch(getPresetProducts());
  } catch (error) {
    console.log(error);
    dispatch({ type: PresetProductActionTypes.CLEAR_ERROR });
    dispatch({
      type: PresetProductActionTypes.DELETE_PRODUCT_ERROR,
      payload: error,
    });
  }
};

export const updatePresetProduct = (id, product) => async (dispatch) => {
  try {
    dispatch({ type: PresetProductActionTypes.LOADING_TRUE });

    const { data } = await updatePresetProductById(id, product);
    dispatch({ type: PresetProductActionTypes.UPDATE_PRODUCT, payload: data });
  } catch (error) {
    dispatch({ type: PresetProductActionTypes.CLEAR_ERROR });
    dispatch({
      type: PresetProductActionTypes.UPDATE_PRODUCT_ERROR,
      payload: error,
    });
  }
};

// clear messages
export const setNull = () => async (dispatch) =>
  dispatch({ type: PresetProductActionTypes.SET_NULL });
