import { useLoaderData } from 'react-router-dom'
export function ProductsIndexPage() {
  const products = useLoaderData();

  return (
    <div>
      <h1>All Products</h1>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}