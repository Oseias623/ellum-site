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

function assetRequest(request) {
  const url = new URL(request.url);

  if (HTML_ROUTES.has(url.pathname) && url.pathname !== "/") {
    url.pathname = `${url.pathname}.html`;
    return new Request(url, request);
  }

  return request;
}

export default {
  fetch(request, env) {
    return env.ASSETS.fetch(assetRequest(request));
  },
};
