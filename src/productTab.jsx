import { Product } from "./product";

function ProductTab() {
  return (
    <>
      <Product title="phone" price={35000} />
      <Product title="laptop" price={70000} />
      <Product title="car" price={1200000} />
    </>
  );
}

export { ProductTab };
