const HTML_ROUTES = new Set([
  "/",
  "/links",
  "/simposio",
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

const worker = {
  fetch(request, env) {
    return env.ASSETS.fetch(assetRequest(request));
  },
};

export default worker;
