import {
  Link,
  Links,
  LiveReload,
  Outlet,
} from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        // app/root.tsx
import React from "react";
import { Remix, useRouteData, Link, Links } from "@remix-run/react";
import { Helmet } from "react-helmet";

export default function App() {
  const data = useRouteData();
  return (
    <Remix>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>Remix: So great, it's funny!</title>
              <Helmet>
            <link rel="stylesheet" href="/styles/main.css" />
              </Helmet>
            <Links />
          </head>
        <body>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </nav>
          </header>
        <main>
          <Outlet />
        </main>
      </body>
    </html>
  </Remix>
  );
}
