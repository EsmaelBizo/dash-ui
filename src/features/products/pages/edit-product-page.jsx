import {
  Link,
  useParams,
} from "react-router-dom";

import PageHeader from "../../../components/page-header/page-header";
import ProductForm from "../components/product-form/product-form";

function EditProductPage() {
  const { id } = useParams();

  return (
    <section>
      <PageHeader
        eyebrow="Products"
        title="Edit Product"
        description={`Product #${id}. The form is intentionally empty so students can connect GET by id + PATCH.`}
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
        title="Update Product"
        submitText="Update Product"
        productId={id}
        // onSubmit={handleSubmit}
      />
    </section>
  );
}

export default EditProductPage;
