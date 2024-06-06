import { CategoryList } from "@/modules/categories";
import { ProductList } from "@/modules/products";

export default function CartPage() {
  return (
    <>
      {/* Listado de categorias */}
      <CategoryList/>
      {/* Menuo de productos */}
      <ProductList/>
    </>
  );
}