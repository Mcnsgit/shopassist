var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_exports = {};
__export(assets_manifest_exports, {
  default: () => assets_manifest_default
});
var assets_manifest_default, init_assets_manifest = __esm({
  "server-assets-manifest:@remix-run/dev/assets-manifest"() {
    assets_manifest_default = { version: "8546502d", entry: { module: "/build/entry.client-EGRG2BJ3.js", imports: ["/build/_shared/chunk-HO4L7GE3.js", "/build/_shared/chunk-ONEK5M4T.js", "/build/_shared/chunk-RQ7GWW3B.js", "/build/_shared/chunk-DG4HR4CT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-I577PD2V.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Chatbot.1": { id: "routes/Chatbot.1", parentId: "root", path: "Chatbot/1", index: void 0, caseSensitive: void 0, module: "/build/routes/Chatbot.1-RQLKMH6L.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Chatbot.2": { id: "routes/Chatbot.2", parentId: "root", path: "Chatbot/2", index: void 0, caseSensitive: void 0, module: "/build/routes/Chatbot.2-TISGKC6J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-HBESY4U6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chatbot": { id: "routes/chatbot", parentId: "root", path: "chatbot", index: void 0, caseSensitive: void 0, module: "/build/routes/chatbot-VC5XUXDX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products": { id: "routes/products", parentId: "root", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/products-72K54RZ2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products.$productId": { id: "routes/products.$productId", parentId: "routes/products", path: ":productId", index: void 0, caseSensitive: void 0, module: "/build/routes/products.$productId-ZXIZ7MKT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/search": { id: "routes/search", parentId: "root", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/search-VWD3WITT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-8546502D.js" };
  }
});

// node_modules/@remix-run/css-bundle/dist/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/css-bundle/dist/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var assetsManifest = (init_assets_manifest(), __toCommonJS(assets_manifest_exports));
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var assetsManifest__default = /* @__PURE__ */ _interopDefaultLegacy(assetsManifest), cssBundleHref2 = assetsManifest__default.default.cssBundleHref;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// app/routes/Chatbot.2.tsx
var require_Chatbot_2 = __commonJS({
  "app/routes/Chatbot.2.tsx"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 40,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 82,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_server()), import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/products.$productId.tsx
var products_productId_exports = {};
__export(products_productId_exports, {
  default: () => PoductRoute
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function PoductRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Here's your hilarious joke:" }, void 0, !1, {
      fileName: "app/routes/products.$productId.tsx",
      lineNumber: 4,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Why don't you find hippopotamuses hiding in trees? They're really good at it." }, void 0, !1, {
      fileName: "app/routes/products.$productId.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.$productId.tsx",
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

// app/routes/Chatbot.1.tsx
var Chatbot_1_exports = {}, import_react3 = require("react");

// server-entry-module:@remix-run/dev/server-build
var route3 = __toESM(require_Chatbot_2());

// app/routes/products.tsx
var products_exports = {};
__export(products_exports, {
  loader: () => loader
});
var loader = async () => {
  let ProductDetails = () => {
  }, product = useRouteData();
  return {
    /* Add more product details here */
  };
};
function useRouteData() {
  throw new Error("Function not implemented.");
}

// app/routes/chatbot.tsx
var chatbot_exports = {};
__export(chatbot_exports, {
  default: () => chatbot_default
});
var import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), ChatBot = () => {
  let [messages, setMessages] = (0, import_react4.useState)([{ sender: "", text: "" }]), sendMessage = (message) => {
    setMessages([...messages, message]);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "chatbot", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "messages", children: messages.map((message, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `message ${message.sender}`, children: message.text }, index, !1, {
      fileName: "app/routes/chatbot.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)) }, void 0, !1, {
      fileName: "app/routes/chatbot.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "input-area" }, void 0, !1, {
      fileName: "app/routes/chatbot.tsx",
      lineNumber: 22,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/chatbot.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}, chatbot_default = ChatBot;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links2
});
var import_react_router_dom = require("react-router-dom");

// app/styles/_index.css
var index_default = "/build/_assets/_index-YCFGUDAS.css";

// app/routes/_index.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: index_default }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: "Welcome to the Personalized Shopping Assistant" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_router_dom.Link, { to: "/products", children: "View Products" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_router_dom.Link, { to: "/search", children: "Search Products" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/search.tsx
var search_exports = {};
__export(search_exports, {
  default: () => Search,
  loader: () => loader2
});
var import_react5 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader2 = async () => ({});
function Search(...args) {
  let [searchTerm, setSearchTerm] = (0, import_react5.useState)(""), [results, setResults] = (0, import_react5.useState)([]), [isLoading, setIsLoading] = (0, import_react5.useState)(!1), [error, setError] = (0, import_react5.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: "Search Products" }, void 0, !1, {
      fileName: "app/routes/search.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { onSubmit: async (event) => {
      event.preventDefault(), setIsLoading(!0), setError(null);
      try {
        let response = await fetch(`/api/search?term=${encodeURIComponent(searchTerm)}`);
        if (!response.ok)
          throw new Error("Search failed. Please try again.");
        let data = await response.json();
        setResults(data);
      } catch {
        setError(null);
      } finally {
        setIsLoading(!1);
      }
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          type: "text",
          value: searchTerm,
          onChange: (event) => {
            setSearchTerm(event.target.value);
          },
          placeholder: "Enter product name"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/search.tsx",
          lineNumber: 50,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "submit", children: "Search" }, void 0, !1, {
        fileName: "app/routes/search.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/search.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Loading..." }, void 0, !1, {
      fileName: "app/routes/search.tsx",
      lineNumber: 58,
      columnNumber: 21
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
      "Error: ",
      error
    ] }, void 0, !0, {
      fileName: "app/routes/search.tsx",
      lineNumber: 59,
      columnNumber: 17
    }, this),
    results.length === 0 && !isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "No results found." }, void 0, !1, {
      fileName: "app/routes/search.tsx",
      lineNumber: 60,
      columnNumber: 46
    }, this),
    results.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: product }, void 0, !1, {
        fileName: "app/routes/search.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: product }, void 0, !1, {
        fileName: "app/routes/search.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, product, !0, {
      fileName: "app/routes/search.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/search.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
init_assets_manifest();
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/products.$productId": {
    id: "routes/products.$productId",
    parentId: "routes/products",
    path: ":productId",
    index: void 0,
    caseSensitive: void 0,
    module: products_productId_exports
  },
  "routes/Chatbot.1": {
    id: "routes/Chatbot.1",
    parentId: "root",
    path: "Chatbot/1",
    index: void 0,
    caseSensitive: void 0,
    module: Chatbot_1_exports
  },
  "routes/Chatbot.2": {
    id: "routes/Chatbot.2",
    parentId: "root",
    path: "Chatbot/2",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/products": {
    id: "routes/products",
    parentId: "root",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/chatbot": {
    id: "routes/chatbot",
    parentId: "root",
    path: "chatbot",
    index: void 0,
    caseSensitive: void 0,
    module: chatbot_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/search": {
    id: "routes/search",
    parentId: "root",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/server.js:
  (**
   * @remix-run/css-bundle v1.16.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
