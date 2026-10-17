import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory, getCategories, addCategory, deleteCategory, updateCategory } from "../api/categories.api";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
};

export const useGetCategory = (id) => {
  return useQuery({
    queryKey: ["categories", id],
    queryFn: () => getCategory(id),
    enabled: !!id,
  });
};

export function useAddCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addCategory,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCategory,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });
}

export function useUpdateCategory(categoryId) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (categoryData) => updateCategory(categoryId, categoryData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.invalidateQueries({ queryKey: ["category", categoryId] });
    },
  });
}