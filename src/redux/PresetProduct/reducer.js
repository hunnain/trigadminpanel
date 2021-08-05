import { PresetProductActionTypes } from "./types";

let INITIAL_STATE = {
  loading: false,
  all_products: null,
  add_product: null,
  error: null,
  updated_product: null,
  deleted_product: {},
  preset_select_success:null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PresetProductActionTypes.LOADING_TRUE:
      return { ...state, loading: true };
    case PresetProductActionTypes.FETCH_PRODUCT:
      return { ...state, loading: false, all_products: action.payload };
    case PresetProductActionTypes.FETCH_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PresetProductActionTypes.DELETE_PRODUCT:
      return { ...state, loading: false, deleted_product: action.payload };
    case PresetProductActionTypes.DELETE_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PresetProductActionTypes.ADD_PRODUCT:
      return { ...state, loading: false, add_product: action.payload };
    case PresetProductActionTypes.ADD_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PresetProductActionTypes.UPDATE_PRODUCT:
      return { ...state, loading: false, updated_product: action.payload };
    case PresetProductActionTypes.UPDATE_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PresetProductActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    case PresetProductActionTypes.SET_NULL:
      return { ...state, loading: false, error: null, all_products: null };
      case PresetProductActionTypes.SET_PRESET_PRODUCT_ACTIVE:
      return { ...state, loading: false, error: null, preset_select_success: action.payload };
    default:
      return state;
  }
};
