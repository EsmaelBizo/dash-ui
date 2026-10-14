# Furniture Dashboard Training — Tailwind CSS

نسخة UI فقط للتدريب، وكل التنسيقات باستخدام Tailwind CSS v4.

## Stack

```text
React
Vite
React Router
Tailwind CSS v4
```

ما في ربط API جاهز.

## المطلوب من الطلاب لاحقاً

يربطوا:

```text
Axios
React Query

GET Products
POST Product
GET Product By ID
PATCH Product
DELETE Product

GET Categories
POST Category
GET Category By ID
PATCH Category
DELETE Category
```

## Products

حالياً:

```js
const products = [];
```

## Categories

حالياً:

```js
const categories = [];
```

## Add / Edit

كل عملية إلها Page منفصلة، بس نفس الفورم:

```text
ProductForm
├── AddProductPage
└── EditProductPage
```

```text
CategoryForm
├── AddCategoryPage
└── EditCategoryPage
```

الفورمات UI فقط، وما فيها GET أو POST أو PATCH.

## Delete

زر Delete موجود UI فقط، بدون confirm alert وبدون API.

## Layout

على Desktop:

```text
Sidebar ثابتة
Topbar ثابت
Scroll فقط داخل Outlet
```

الـlayout مبني Flex:

```jsx
<div className="flex h-screen overflow-hidden">
  <Sidebar />

  <section className="flex min-w-0 flex-1 flex-col overflow-hidden">
    <Topbar />

    <main className="min-h-0 flex-1 overflow-y-auto">
      <Outlet />
    </main>
  </section>
</div>
```

## Tailwind v4

`vite.config.js`:

```js
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

`src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-brand-950: #12251d;
  --color-brand-900: #17301f;
  --color-brand-800: #254a31;
  --color-brand-100: #dff3d4;
  --color-page: #f4f7f5;
  --color-surface: #ffffff;
  --color-muted: #6d7d75;
}
```

## Run

```bash
npm install
npm run dev
```
