import { Link } from "react-router-dom";

import PageHeader from "../../../components/page-header/page-header";
import ProductForm from "../components/product-form/product-form";

function AddProductPage() {
  return (
    <section>
      <PageHeader
        eyebrow="Products"
        title="Add Product"
        description="The form UI is ready. Students will connect POST with React Query."
        action={
          <Link
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-extrabold text-[#354a40] transition hover:bg-[#f4f8f5]"
            to="/products"
          >
            Back
          </Link>
        }
      />

      <ProductForm
        title="Create Product"
        submitText="Add Product"
      />
    </section>
  );
}

export default AddProductPage;
