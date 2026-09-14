const HTML_ROUTES = new Set([
  "/",
  "/sobre",
  "/metodologia",
  "/matriculas",
  "/contato",
  "/links",
  "/simposio",
  "/simposio-vendas",
]);

const CLIENT_PREFIX = "/dist/client";

function assetRequest(request) {
  const url = new URL(request.url);

  if (HTML_ROUTES.has(url.pathname) && url.pathname !== "/") {
    url.pathname = `${CLIENT_PREFIX}${url.pathname}.html`;
    return new Request(url, request);
  }

  if (url.pathname === "/") {
    url.pathname = `${CLIENT_PREFIX}/index.html`;
    return new Request(url, request);
  }

  if (!url.pathname.startsWith("/dist/")) {
    url.pathname = `${CLIENT_PREFIX}${url.pathname}`;
    return new Request(url, request);
  }

  return request;
}

export default {
  fetch(request, env) {
    return env.ASSETS.fetch(assetRequest(request));
  },
};
