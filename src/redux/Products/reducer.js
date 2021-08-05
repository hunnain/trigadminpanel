import { ProductActionTypes } from "./types";

let INITIAL_STATE = {
  loading: false,
  all_products: null,
  add_product: null,
  error: null,
  updated_product: null,
  deleted_product: {},
  loading_csv: false,
  csvs: [],
  set_csvs: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.LOADING_TRUE:
      return { ...state, loading: true };
    case ProductActionTypes.FETCH_PRODUCT:
      return { ...state, loading: false, all_products: action.payload };
    case ProductActionTypes.FETCH_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ProductActionTypes.DELETE_PRODUCT:
      return { ...state, loading: false, deleted_product: action.payload };
    case ProductActionTypes.DELETE_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ProductActionTypes.ADD_PRODUCT:
      return { ...state, loading: false, add_product: action.payload };
    case ProductActionTypes.ADD_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ProductActionTypes.UPDATE_PRODUCT:
      return { ...state, loading: false, updated_product: action.payload };
    case ProductActionTypes.UPDATE_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ProductActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    case ProductActionTypes.FETCH_PRODUCT_CSV_NAME:
      return { ...state, loading_csv: false, csvs: action.payload };
    case ProductActionTypes.FETCH_PRODUCT_CSV_NAME_ERROR:
      return { ...state, loading_csv: false, error: null };
    case ProductActionTypes.FETCH_PRODUCT_CSV_NAME_LOADING:
      return { ...state, loading_csv: true };
    case ProductActionTypes.SET_PRODUCT_CSV:
      return { ...state, loading_csv: false, set_csvs: action.payload };
    case ProductActionTypes.SET_PRODUCT_CSV_ERROR:
      return { ...state, loading_csv: false, error: null };
    case ProductActionTypes.SET_PRODUCT_CSV_LOADING:
      return { ...state, loading_csv: true };
    default:
      return state;
  }
};
