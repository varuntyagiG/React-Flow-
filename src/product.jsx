import "./product.css";

function Product({ title, price, feature }) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>Price : {price}</h5>
      <h5>{feature}</h5>
    </div>
  );
}

export { Product };
