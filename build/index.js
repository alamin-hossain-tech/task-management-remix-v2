var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { renderToString } from "react-dom/server";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { RemixServer } from "@remix-run/react";

// app/context.tsx
import { createContext } from "react";
var ServerStyleContext = createContext(null), ClientStyleContext = createContext(
  null
);

// app/createEmotionCache.ts
import createCache from "@emotion/cache";
var defaultCache = createEmotionCache();
function createEmotionCache() {
  return createCache({ key: "cha" });
}

// app/entry.server.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = createEmotionServer(cache), html = renderToString(
    /* @__PURE__ */ jsxDEV(ServerStyleContext.Provider, { value: null, children: /* @__PURE__ */ jsxDEV(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = renderToString(
    /* @__PURE__ */ jsxDEV(ServerStyleContext.Provider, { value: chunks.styles, children: /* @__PURE__ */ jsxDEV(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
import { useContext, useEffect, useMemo } from "react";
import { withEmotionCache } from "@emotion/react";
import { ChakraProvider, cookieStorageManagerSSR } from "@chakra-ui/react";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";

// app/theme/theme.ts
import { extendTheme } from "@chakra-ui/react";
var config = {
  initialColorMode: "light",
  useSystemColorMode: !0
};
var theme = extendTheme({
  config,
  colors: {
    border: "#DBDBDB"
  }
}), theme_default = theme;

// app/components/main-layout/main-layout.tsx
import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var MainLayout = () => /* @__PURE__ */ jsxDEV2(Fragment, { children: /* @__PURE__ */ jsxDEV2(Flex, { gap: 0, position: "relative", children: [
  /* @__PURE__ */ jsxDEV2(
    Box,
    {
      w: "250px",
      h: "100dvh",
      position: "sticky",
      left: 0,
      top: 0,
      borderRight: "1px",
      borderColor: "border",
      zIndex: 99,
      children: /* @__PURE__ */ jsxDEV2(
        HStack,
        {
          w: "full",
          h: "70px",
          borderBottom: "1px",
          borderColor: "border",
          align: "center",
          justify: "center",
          children: /* @__PURE__ */ jsxDEV2(Heading, { children: "Logo" }, void 0, !1, {
            fileName: "app/components/main-layout/main-layout.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/main-layout/main-layout.tsx",
          lineNumber: 19,
          columnNumber: 11
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/main-layout/main-layout.tsx",
      lineNumber: 9,
      columnNumber: 9
    },
    this
  ),
  /* @__PURE__ */ jsxDEV2(Box, { w: "full", children: [
    /* @__PURE__ */ jsxDEV2(
      Box,
      {
        w: "full",
        h: "70px",
        borderBottom: "1px",
        borderColor: "border",
        position: "sticky",
        left: 0,
        top: 0,
        zIndex: 99,
        bgColor: "white"
      },
      void 0,
      !1,
      {
        fileName: "app/components/main-layout/main-layout.tsx",
        lineNumber: 31,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
      fileName: "app/components/main-layout/main-layout.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/main-layout/main-layout.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/main-layout/main-layout.tsx",
  lineNumber: 8,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/main-layout/main-layout.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), main_layout_default = MainLayout;

// app/root.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1"
  }
], links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }
], Document = withEmotionCache(
  ({ children }, emotionCache) => {
    let serverStyleData = useContext(ServerStyleContext), clientStyleData = useContext(ClientStyleContext);
    useEffect(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData?.reset();
    }, []);
    function getColorMode(cookies2) {
      let match = cookies2.match(
        new RegExp(`(^| )${CHAKRA_COOKIE_COLOR_KEY}=([^;]+)`)
      );
      return match?.[2];
    }
    let DEFAULT_COLOR_MODE = "light", CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode", cookies = useLoaderData();
    typeof document < "u" && (cookies = document.cookie);
    let colorMode = useMemo(() => {
      let color = getColorMode(cookies);
      return !color && DEFAULT_COLOR_MODE && (cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`, color = DEFAULT_COLOR_MODE), color;
    }, [cookies]);
    return /* @__PURE__ */ jsxDEV3(
      "html",
      {
        lang: "en",
        ...colorMode && {
          "data-theme": colorMode,
          style: { colorScheme: colorMode }
        },
        children: [
          /* @__PURE__ */ jsxDEV3(
            "head",
            {
              ...colorMode && {
                className: `chakra-ui-${colorMode}`
              },
              children: [
                /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 110,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 111,
                  columnNumber: 11
                }, this),
                serverStyleData?.map(({ key, ids, css }) => /* @__PURE__ */ jsxDEV3(
                  "style",
                  {
                    "data-emotion": `${key} ${ids.join(" ")}`,
                    dangerouslySetInnerHTML: { __html: css }
                  },
                  key,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 113,
                    columnNumber: 13
                  },
                  this
                ))
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/root.tsx",
              lineNumber: 105,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3(
            "body",
            {
              ...colorMode && {
                className: `chakra-ui-${colorMode}`
              },
              children: [
                /* @__PURE__ */ jsxDEV3(
                  ChakraProvider,
                  {
                    colorModeManager: cookieStorageManagerSSR(cookies),
                    theme: theme_default,
                    children
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 131,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 132,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 133,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/root.tsx",
              lineNumber: 120,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 7
      },
      this
    );
  }
);
function App() {
  return /* @__PURE__ */ jsxDEV3(Document, { children: /* @__PURE__ */ jsxDEV3(main_layout_default, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 143,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 142,
    columnNumber: 5
  }, this);
}
var loader = async ({ request }) => request.headers.get("cookie") ?? "";

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta2
});
import { Box as Box2 } from "@chakra-ui/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV4(Box2, { h: "200vh", children: " hello world" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
import { Box as Box3 } from "@chakra-ui/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var About = () => /* @__PURE__ */ jsxDEV5(Box3, { color: "brand.100", children: " this is about page" }, void 0, !1, {
  fileName: "app/routes/about.tsx",
  lineNumber: 5,
  columnNumber: 10
}, this), about_default = About;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HB6OAMWV.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-BE5FCQ66.js", "/build/_shared/chunk-GRSB5VYC.js", "/build/_shared/chunk-4JUVF4LC.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-TBOFXUBR.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7XO6JWZY.js", imports: ["/build/_shared/chunk-FG5L427L.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-7TEMG4RR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-NXA6WBF7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "f879fad9", hmr: { runtime: "/build/_shared/chunk-TBOFXUBR.js", timestamp: 1707151151847 }, url: "/build/manifest-F879FAD9.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
