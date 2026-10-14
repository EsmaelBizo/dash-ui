import {
  Link,
  useParams,
} from "react-router-dom";

import CategoryForm from "../components/category-form/category-form";
import PageHeader from "../../../components/page-header/page-header";

function EditCategoryPage() {
  const { id } = useParams();

  return (
    <section>
      <PageHeader
        eyebrow="Categories"
        title="Edit Category"
        description={`Category #${id}. The form is intentionally empty so students can connect GET by id + PATCH.`}
        action={
          <Link
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-extrabold text-[#354a40] transition hover:bg-[#f4f8f5]"
            to="/categories"
          >
            Back
          </Link>
        }
      />

      <CategoryForm
        title="Update Category"
        submitText="Update Category"
        categoryId={id}
      />
    </section>
  );
}

export default EditCategoryPage;
