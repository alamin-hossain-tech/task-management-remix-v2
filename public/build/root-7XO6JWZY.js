import {
  ClientStyleContext,
  ServerStyleContext
} from "/build/_shared/chunk-BE5FCQ66.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-GRSB5VYC.js";
import {
  Box,
  ChakraProvider,
  Flex,
  HStack,
  Heading,
  cookieStorageManagerSSR,
  extendTheme
} from "/build/_shared/chunk-FG5L427L.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  withEmotionCache
} from "/build/_shared/chunk-4JUVF4LC.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-TBOFXUBR.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var import_react4 = __toESM(require_react(), 1);

// app/theme/theme.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/theme/theme.ts"
  );
  import.meta.hot.lastModified = "1707150812007.8992";
}
var config = {
  initialColorMode: "light",
  useSystemColorMode: true
};
var theme = extendTheme({
  config,
  colors: {
    border: "#DBDBDB"
  }
});
var theme_default = theme;

// app/components/main-layout/main-layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/main-layout/main-layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/main-layout/main-layout.tsx"
  );
  import.meta.hot.lastModified = "1707151151272.27";
}
var MainLayout = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { gap: 0, position: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { w: "250px", h: "100dvh", position: "sticky", left: 0, top: 0, borderRight: "1px", borderColor: "border", zIndex: 99, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { w: "full", h: "70px", borderBottom: "1px", borderColor: "border", align: "center", justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { children: "Logo" }, void 0, false, {
      fileName: "app/components/main-layout/main-layout.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/main-layout/main-layout.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/main-layout/main-layout.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { w: "full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { w: "full", h: "70px", borderBottom: "1px", borderColor: "border", position: "sticky", left: 0, top: 0, zIndex: 99, bgColor: "white" }, void 0, false, {
        fileName: "app/components/main-layout/main-layout.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/components/main-layout/main-layout.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/main-layout/main-layout.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/main-layout/main-layout.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/main-layout/main-layout.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c = MainLayout;
var main_layout_default = MainLayout;
var _c;
$RefreshReg$(_c, "MainLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
  import.meta.hot.lastModified = "1707148679416.7625";
}
var meta = () => [{
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}];
var links = () => {
  return [{
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }, {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }, {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  }];
};
var Document = _s(withEmotionCache(_c2 = _s(({
  children
}, emotionCache) => {
  _s();
  const serverStyleData = (0, import_react4.useContext)(ServerStyleContext);
  const clientStyleData = (0, import_react4.useContext)(ClientStyleContext);
  (0, import_react4.useEffect)(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData?.reset();
  }, []);
  function getColorMode(cookies2) {
    const match = cookies2.match(new RegExp(`(^| )${CHAKRA_COOKIE_COLOR_KEY}=([^;]+)`));
    return match == null ? void 0 : match[2];
  }
  const DEFAULT_COLOR_MODE = "light";
  const CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode";
  let cookies = useLoaderData();
  if (typeof document !== "undefined") {
    cookies = document.cookie;
  }
  let colorMode = (0, import_react4.useMemo)(() => {
    let color = getColorMode(cookies);
    if (!color && DEFAULT_COLOR_MODE) {
      cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`;
      color = DEFAULT_COLOR_MODE;
    }
    return color;
  }, [cookies]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", ...colorMode && {
    "data-theme": colorMode,
    style: {
      colorScheme: colorMode
    }
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { ...colorMode && {
      className: `chakra-ui-${colorMode}`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      serverStyleData?.map(({
        key,
        ids,
        css
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("style", { "data-emotion": `${key} ${ids.join(" ")}`, dangerouslySetInnerHTML: {
        __html: css
      } }, key, false, {
        fileName: "app/root.tsx",
        lineNumber: 112,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { ...colorMode && {
      className: `chakra-ui-${colorMode}`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChakraProvider, { colorModeManager: cookieStorageManagerSSR(cookies), theme: theme_default, children }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 116,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 97,
    columnNumber: 10
  }, this);
}, "2Oo8RC9aPgB7opWdMzYUmSa3q3o=", false, function() {
  return [useLoaderData];
})), "2Oo8RC9aPgB7opWdMzYUmSa3q3o=", false, function() {
  return [useLoaderData];
});
_c22 = Document;
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(main_layout_default, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 135,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 134,
    columnNumber: 10
  }, this);
}
_c3 = App;
var _c2;
var _c22;
var _c3;
$RefreshReg$(_c2, "Document$withEmotionCache");
$RefreshReg$(_c22, "Document");
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-7XO6JWZY.js.map
