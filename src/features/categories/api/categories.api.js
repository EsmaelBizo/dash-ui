import apiClient from "../../../lib/api-client";

export const getCategories = async () => {
  const response = await apiClient.get(`/categories`);

  return response;
};

export const getCategory = async (id) => {
  const response = await apiClient.get(`/categories/${id}`);

  return response;
};

export const addCategory = async (productData) => {
  const response = await apiClient.post(`/categories`, productData);

  return response;
};

export const deleteCategory = async (categoryId) => {
  const response = await apiClient.delete(`/categories/${categoryId}`);

  return response;
};

export const updateCategory = async (categoryData) => {
  const response = await apiClient.patch(`/categories`, categoryData);

  return response;
};