import "./product.css";

function Product({ title, price }) {
  if (price > 40000) {
    return (
      <div className="Product">
        <h3>{title}</h3>
        <h5>Price : {price}</h5>
        <p>Discount of 5%</p>
      </div>
    );
  } else {
    return (
      <div className="Product">
        <h3>{title}</h3>
        <h5>Price : {price}</h5>
      </div>
    );
  }
}

export { Product };
