export default function Product({ product }) {
  return (
    <div className="border p-3">
      <h5>{product.name}</h5>
      <h6 className="text-muted">Price: ${product.price}</h6>
    </div>
  );
}
