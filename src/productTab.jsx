import { Product } from "./product";

function ProductTab() {
  let feature = [<li>"good"</li>, <li>"reliable"</li>, <li>"hi-tech"</li>];
  return (
    <>
      <Product title="phone" price={35000} feature={feature} />
      <Product title="laptop" price={70000} />
      <Product title="car" price={1200000} />
    </>
  );
}

export { ProductTab };
