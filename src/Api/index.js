import axios from "axios";
import { URL } from "../config/serverUrl";

export const getAllProducts = () => axios.get(`${URL}/products/getAll`);
export const getSpecificProduct = (id) => axios.get(`${URL}/products/${id}`);

export const updateProductById = (id,data) =>
  axios.put(`${URL}/products/${id}`, data, {
    headers: {
      "content-type": "application/json",
    },
  });

export const deleteProductById = (id) =>
  axios.delete(`${URL}/products/${id}`);

export const addBulkProducts = (product) =>
  axios.post(`${URL}/products/upload`, product, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });

  // ======
  export const getAllPresetProducts = () => axios.get(`${URL}/presentProducts/getAll`);
export const getSpecificPresetProduct = (id) => axios.get(`${URL}/presentProducts/${id}`);

export const updatePresetProductById = (id,data) =>
  axios.put(`${URL}/presentProducts/${id}`, data, {
    headers: {
      "content-type": "application/json",
    },
  });

export const deletePresetProductById = (id) =>
  axios.delete(`${URL}/presentProducts/${id}`);

export const addPresetProducts = (product) =>
  axios.post(`${URL}/presentProducts`, product, {
    headers: {
      "content-type": "application/json",
    },
  });

  export const getCsvFileNames = () => axios.get(`${URL}/productsFileSelection/getAll`);

  export const setSelectedCsvData = (id) =>
  axios.put(`${URL}/productsFileSelection/${id}/setSelected`, {
    headers: {
      "content-type": "application/json",
    },
  });

  export const deleteCsv = (id) =>axios.delete(`${URL}/productsFileSelection/${id}`);

  export const setSelectedPresetProduct= (id) =>
  axios.put(`${URL}/presentProducts/${id}/setActive`, {
    headers: {
      "content-type": "application/json",
    },
  });