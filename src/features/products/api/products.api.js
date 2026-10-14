import apiClient from "../../../lib/api-client";

export const getProducts = async () => {
  const response = await apiClient.get(`/products`);

  return response;
};

export const getProduct = async (id) => {
  const response = await apiClient.get(`/products/${id}`);

  return response;
};

export const addProduct = async (productData) => {
  const response = await apiClient.post(`/products`, productData);

  return response;
};

export const deleteProduct = async (productId) => {
  const response = await apiClient.delete(`/products/${productId}`);

  return response;
};

export const updateProduct = async (productData) => {
  const response = await apiClient.patch(`/products`, productData);

  return response;
};