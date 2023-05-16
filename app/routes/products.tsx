// app/routes/products.tsx
import { useRouteLoaderData } from "@remix-run/react";
import { useRouteData } from "@remix-run/react";

export let loader = async () => {
  // Load data for your products route here
  return {};
};


export default function Products({ args }: { args: []; }) {
  let { products } = useRouteData();

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}


