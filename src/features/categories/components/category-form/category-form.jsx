import { useEffect, useState } from "react";
import Button from "../../../../components/ui/button";
import Input from "../../../../components/ui/input";
import Textarea from "../../../../components/ui/textarea";
import {
  useAddCategory,
  useUpdateCategory,
  useGetCategory,
} from "../../hooks/categories.hooks";

function CategoryForm({ title, submitText, categoryId = null }) {
  const [category, setCategory] = useState({
    name: "",
    description: "",
  });

  const { data: categoryData } = useGetCategory(categoryId, {
    enabled: !!categoryId,
  });

  useEffect(() => {
    if (categoryData?.data) {
      setCategory(categoryData.data);
    }
  }, [categoryData]);

  const addCategory = useAddCategory();
  const editCategory = useUpdateCategory(categoryId);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedCategory = {
      name: category.name,
      description: category.description,
    };
    if (categoryId) {
      editCategory.mutate(formattedCategory, {
        onSuccess: (data) => {
          console.log("Category updated successfully:", data);
        },
        onError: (error) => {
          console.error("Error updating category:", error);
        },
      });
    } else {
      addCategory.mutate(formattedCategory, {
        onSuccess: (data) => {
          console.log("Category added successfully:", data);
        },
        onError: (error) => {
          console.error("Error adding category:", error);
        },
      });
    }
  };

  const labelClass = "grid gap-2 text-[11px] font-extrabold text-[#4c6257]";

  return (
    <section className="max-w-3xl rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_34px_rgba(25,50,37,0.05)]">
      <div className="mb-5">
        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-muted">
          Category Form
        </p>

        <h3 className="mt-1 text-xl font-bold text-brand-900">{title}</h3>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <label className={labelClass}>
          Category Name
          <Input
            name="name"
            placeholder="Living Room"
            value={category.name}
            onChange={(e) =>
              setCategory({
                ...category,
                name: e.target.value,
              })
            }
          />
        </label>

        <label className={labelClass}>
          Description
          <Textarea
            name="description"
            rows="5"
            placeholder="Sofas, chairs and living room furniture"
            value={category.description}
            onChange={(e) =>
              setCategory({
                ...category,
                description: e.target.value,
              })
            }
          />
        </label>

        <div>
          <Button type="submit">{submitText}</Button>
        </div>
      </form>
    </section>
  );
}

export default CategoryForm;
