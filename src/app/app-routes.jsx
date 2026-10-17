import { Navigate } from "react-router-dom";

import ProductsPage from "../features/products/pages/products-page";
import AddProductPage from "../features/products/pages/add-product-page";
import EditProductPage from "../features/products/pages/edit-product-page";

import CategoriesPage from "../features/categories/pages/categories-page";
import AddCategoryPage from "../features/categories/pages/add-category-page";
import EditCategoryPage from "../features/categories/pages/edit-category-page";

export const appRoutes = [
  {
    path: "/",
    element: <Navigate to="/products" replace />,
  },
  { 
    path: "/products",
    element: <ProductsPage />,
  },
  { 
    path: "/products/add",
    element: <AddProductPage />,
  },
  { 
    path: "/products/:id/edit",
    element: <EditProductPage />,
  },
  { 
    path: "/categories",
    element: <CategoriesPage />,
  },
  { 
    path: "/categories/add",
    element: <AddCategoryPage />,
  },
  { 
    path: "/categories/:id/edit",
    element: <EditCategoryPage />,
  },
];