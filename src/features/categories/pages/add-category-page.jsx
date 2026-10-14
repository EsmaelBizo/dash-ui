import { Link } from "react-router-dom";

import CategoryForm from "../components/category-form/category-form";
import PageHeader from "../../../components/page-header/page-header";

function AddCategoryPage() {
  return (
    <section>
      <PageHeader
        eyebrow="Categories"
        title="Add Category"
        description="The form UI is ready. Students will connect POST with React Query."
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
        title="Create Category"
        submitText="Add Category"
      />
    </section>
  );
}

export default AddCategoryPage;
