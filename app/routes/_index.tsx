import { useRouteLoaderData } from "@remix-run/react";
import { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { Link } from "react-router-dom";
import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return <div>Hello Index Route</div>;
}

export let loader = async () => {
  // Load data for your index route here
  return {};
};

export default function Index() {
  let data = useRouteData();

  return (
    <div>
      <h2>Welcome to the Personalized Shopping Assistant</h2>
      <nav>
        <Link to="/products">View Products</Link>
        <Link to="/search">Search Products</Link>
      </nav>
    </div>
  );
}
<form method="post">
<div>
  <label>
    Name: <input type="text" name="name" />
  </label>
</div>
<div>
  <label>
    Content: <textarea name="content" />
  </label>
</div>
<div>
  <button type="submit" className="button">
    Add
  </button>
</div>
</form>;
function useRouteData(): void {
    throw new Error("Function not implemented.");
}

