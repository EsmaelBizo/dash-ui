import { useEffect, useState } from "react";
import Button from "../../../../components/ui/button";
import Input from "../../../../components/ui/input";
import Select from "../../../../components/ui/select";
import Textarea from "../../../../components/ui/textarea";
import { useGetCategories } from "../../../categories/hooks/categories.hooks";
import {
  useGetProduct,
  useAddProduct,
  useUpdateProduct,
} from "../../hooks/products.hooks";
import { replace, useNavigate } from "react-router-dom";

const initialProductState = {
  name: "",
  price: "",
  categoryId: "",
  imageUrl: "",
  description: "",
};

function ProductForm({ title, submitText, productId = null }) {
  const [product, setProduct] = useState(initialProductState);

  const categories = useGetCategories().data?.data || [];

  const hasRealProductId =
    productId !== null && productId !== undefined && productId !== "";

  const { data: productData } = useGetProduct(productId, {
    enabled: hasRealProductId,
  });

  useEffect(() => {
    if (productData?.data) {
      setProduct(productData.data);
    }
  }, [productData]);

  useEffect(() => {
    if (!hasRealProductId && categories.length > 0 && !product.categoryId) {
      setProduct((prev) => ({ ...prev, categoryId: categories[0].id }));
    }
  }, [categories, hasRealProductId, product.categoryId]);

  const addProduct = useAddProduct();
  const editProduct = useUpdateProduct(productId);

  const isPending = addProduct.isPending || editProduct.isPending;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedProduct = {
      name: product.name,
      price: Number(product.price),
      categoryId: Number(product.categoryId),
      imageUrl: product.imageUrl,
      description: product.description,
    };

    if (hasRealProductId) {
      editProduct.mutate(formattedProduct, {
        onSuccess: (data) => {
          console.log("Product updated successfully:", data);
          alert("تم تحديث المنتج بنجاح!");
          navigate("/products", { replace: true });
        },
        onError: (error) => {
          console.error("Error updating product:", error);
          alert(
            `فشل التعديل: ${error.response?.data?.message || "يرجى مراجعة الحقول"}`,
          );
        },
      });
    } else {
      addProduct.mutate(formattedProduct, {
        onSuccess: (data) => {
          console.log("Product added successfully:", data);
          alert("تم إضافة المنتج بنجاح!");
          setProduct(initialProductState);
          navigate("/products", { replace: true });
        },
        onError: (error) => {
          console.error("Error adding product:", error);
          alert(
            `فشلت الإضافة: ${error.response?.data?.message || "يرجى مراجعة الحقول"}`,
          );
        },
      });
    }
  };

  const labelClass = "grid gap-2 text-[11px] font-extrabold text-[#4c6257]";

  return (
    <section className="max-w-3xl rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_34px_rgba(25,50,37,0.05)]">
      <div className="mb-5">
        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-muted">
          Product Form
        </p>
        <h3 className="mt-1 text-xl font-bold text-brand-900">{title}</h3>
      </div>

      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <label className={labelClass}>
          Product Name
          <Input
            name="name"
            placeholder="Stylish Soft Chair"
            value={product?.name || ""}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            required
          />
        </label>

        <label className={labelClass}>
          Price
          <Input
            name="price"
            type="number"
            min="0"
            step="0.01"
            placeholder="20"
            value={product?.price || ""}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            required
          />
        </label>

        <label className={labelClass}>
          Category
          <Select
            name="categoryId"
            value={product?.categoryId || ""}
            onChange={(e) =>
              setProduct({ ...product, categoryId: e.target.value })
            }
            required
          >
            {categories.length === 0 && (
              <option value="">Loading categories...</option>
            )}
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
        </label>

        <label className={labelClass}>
          Image URL
          <Input
            name="imageUrl"
            placeholder="https://..."
            value={product?.imageUrl || ""}
            onChange={(e) =>
              setProduct({ ...product, imageUrl: e.target.value })
            }
            required
          />
        </label>

        <label className={`${labelClass} col-span-2`}>
          Description
          <Textarea
            name="description"
            rows="5"
            placeholder="Product description..."
            value={product?.description || ""}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            required
          />
        </label>

        <div className="col-span-2">
          <Button type="submit" disabled={isPending}>
            {isPending ? "جاري الحفظ..." : submitText}
          </Button>
        </div>
      </form>
    </section>
  );
}

export default ProductForm;
