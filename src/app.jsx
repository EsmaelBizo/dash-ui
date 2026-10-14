import { Navigate, Route, Routes } from "react-router-dom";

import DashboardLayout from "./layouts/dashboard-layout";

import ProductsPage from "./features/products/pages/products-page";
import AddProductPage from "./features/products/pages/add-product-page";
import EditProductPage from "./features/products/pages/edit-product-page";

import CategoriesPage from "./features/categories/pages/categories-page";
import AddCategoryPage from "./features/categories/pages/add-category-page";
import EditCategoryPage from "./features/categories/pages/edit-category-page";

import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Navigate to="/products" replace />} />

            <Route path="/products" element={<ProductsPage />} />

            <Route path="/products/add" element={<AddProductPage />} />

            <Route path="/products/:id/edit" element={<EditProductPage />} />

            <Route path="/categories" element={<CategoriesPage />} />

            <Route path="/categories/add" element={<AddCategoryPage />} />

            <Route path="/categories/:id/edit" element={<EditCategoryPage />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
