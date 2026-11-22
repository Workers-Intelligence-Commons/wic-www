// Sends every request on www.workers-intelligence-commons.org to the same path on the bare domain.
const TARGET = "https://workers-intelligence-commons.org";

export default {
  fetch(request: Request): Response {
    const url = new URL(request.url);
    return Response.redirect(TARGET + url.pathname + url.search, 301);
  },
};
