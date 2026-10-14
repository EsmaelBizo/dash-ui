import { Link } from "react-router-dom";

import DataTable from "../../../components/data-table/data-table";
import EmptyState from "../../../components/empty-state/empty-state";
import PageHeader from "../../../components/page-header/page-header";
import Button from "../../../components/ui/button";
import { useGetProducts, useDeleteProduct } from "../hooks/products.hooks";

function ProductsPage() {
  const deleteProduct = useDeleteProduct();

  const handleDelete = (productId) => {
    deleteProduct.mutate(productId, {
      onSuccess: (data) => {
        console.log("Product deleted successfully:", data);
      },
      onError: (error) => {
        console.error("Error deleting product:", error);
      },
    });
  };

  const products = useGetProducts().data?.data || [];
  const columns = [
    {
      key: "product",
      header: "Product",
      className: "px-3 py-3 text-sm text-[#34483f]",
      render: (product) => (
        <div className="flex min-w-47.5 items-center gap-3">
          <div className="grid size-12 place-items-center rounded-xl bg-[#f1f5f2] text-[9px] font-black text-[#8a9c92]">
            IMG
          </div>

          <div>
            <strong className="block">
              {product.name}
            </strong>

            <small className="mt-1 block text-[10px] text-black/40">
              #{product.id}
            </small>
          </div>
        </div>
      ),
    },
    {
      key: "category",
      header: "Category",
      render: (product) => (
        <span className="inline-flex rounded-full bg-[#eef5ef] px-2.5 py-1.5 text-[11px] font-extrabold text-[#386047]">
          {product.category?.name}
        </span>
      ),
    },
    {
      key: "price",
      header: "Price",
      render: (product) => `$${product.price}`,
    },
    {
      key: "actions",
      header: "Actions",
      render: (product) => (
        <div className="flex flex-wrap gap-2">
          <Link
            className="rounded-lg border border-black/10 bg-white px-3 py-2 text-[11px] font-extrabold text-[#354a40] transition hover:bg-[#f4f8f5]"
            to={`/products/${product.id}/edit`}
          >
            Edit
          </Link>

          <Button variant="danger" onClick={() => handleDelete(product.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <section>
      <PageHeader
        eyebrow="Products"
        title="Products"
        description="Products table UI ready for students to connect with React Query."
        action={
          <Link
            className="inline-flex items-center justify-center rounded-xl bg-brand-900 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-brand-800"
            to="/products/add"
          >
            Add Product
          </Link>
        }
      />

      <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_34px_rgba(25,50,37,0.05)]">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-muted">
              Table
            </p>

            <h3 className="mt-1 text-xl font-bold text-brand-900">
              Products List
            </h3>
          </div>

          <span className="inline-flex min-w-9 items-center justify-center rounded-full bg-[#eef5ef] px-3 py-1.5 text-[11px] font-extrabold text-[#386047]">
            {products.length}
          </span>
        </div>

        <DataTable
          columns={columns}
          data={products}
          emptyState={(
            <EmptyState
              title="No products yet"
              description="Connect GET products with React Query, then render them here."
            />
          )}
        />
      </section>
    </section>
  );
}

export default ProductsPage;
