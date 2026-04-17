import "../css/cardProduct.css";

const CardProduct = ({ product }) => {
  return (
    <div className="card-product">
      <div className="card-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card-content">
        <h3 className="card-name">{product.name}</h3>
        <p className="card-reference">Réf: {product.reference}</p>
        <p className="card-price">{product.price} Ar</p>
      </div>
    </div>
  );
};

export default CardProduct;
