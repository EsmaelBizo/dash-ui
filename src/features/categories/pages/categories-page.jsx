import { Link } from "react-router-dom";

import DataTable from "../../../components/data-table/data-table";
import EmptyState from "../../../components/empty-state/empty-state";
import PageHeader from "../../../components/page-header/page-header";
import Button from "../../../components/ui/button";
import { useGetCategories, useDeleteCategory } from "../hooks/categories.hooks";

function CategoriesPage() {
  const categories = useGetCategories().data?.data || [];
  const deleteCategory = useDeleteCategory();

  const handleDelete = (id) => {
    deleteCategory.mutate(id, {
      onSuccess: () => {
        console.log("Category deleted successfully");
      },
      onError: (error) => {
        console.error("Error deleting category:", error);
      },
    });
  };

  const columns = [
    {
      key: "category",
      header: "Category",
      render: (category) => (
        <>
          <strong className="block">
            {category.name}
          </strong>

          <small className="mt-1 block text-[10px] text-black/40">
            #{category.id}
          </small>
        </>
      ),
    },
    {
      key: "products",
      header: "Products",
      render: (category) => (
        <span className="inline-flex rounded-full bg-[#eef5ef] px-2.5 py-1.5 text-[11px] font-extrabold text-[#386047]">
          {category._count?.products ?? 0}
        </span>
      ),
    },
    {
      key: "description",
      header: "Description",
      className: "max-w-[300px] px-3 py-3 text-sm leading-6 text-muted",
    },
    {
      key: "actions",
      header: "Actions",
      render: (category) => (
        <div className="flex flex-wrap gap-2">
          <Link
            className="rounded-lg border border-black/10 bg-white px-3 py-2 text-[11px] font-extrabold text-[#354a40] transition hover:bg-[#f4f8f5]"
            to={`/categories/${category.id}/edit`}
          >
            Edit
          </Link>

          <Button variant="danger" onClick={() => handleDelete(category.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <section>
      <PageHeader
        eyebrow="Categories"
        title="Categories"
        description="Categories table UI ready for students to connect with React Query."
        action={
          <Link
            className="inline-flex items-center justify-center rounded-xl bg-brand-900 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-brand-800"
            to="/categories/add"
          >
            Add Category
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
              Categories List
            </h3>
          </div>

          <span className="inline-flex min-w-9 items-center justify-center rounded-full bg-[#eef5ef] px-3 py-1.5 text-[11px] font-extrabold text-[#386047]">
            {categories.length}
          </span>
        </div>

        <DataTable
          columns={columns}
          data={categories}
          emptyState={(
            <EmptyState
              title="No categories yet"
              description="Connect GET categories with React Query, then render them here."
            />
          )}
        />
      </section>
    </section>
  );
}

export default CategoriesPage;
