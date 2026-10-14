import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProduct, getProducts, addProduct, deleteProduct, updateProduct } from "../api/products.api";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
};

export const useGetProduct = (id) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id),
    enabled: !!id,
  });
};

export function useAddProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
}

export function useUpdateProduct(productId) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
    },
  });
}