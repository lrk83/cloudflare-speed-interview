const generalClientError = JSON.stringify({
  success: false,
  data: null,
  errors: [{ code: 400, message: "invalid request" }],
});

const generalServerError = JSON.stringify({
  success: false,
  data: null,
  errors: [{ code: 500, message: "server error" }],
});

const handleFetchTasks = async (request) => {
  if (request.method === "GET") {
    try {
      const response = await TASKS.get("kanban-data");
      return response;
    } catch {
      return generalClientError;
    }
  } else if (request.method === "POST") {
    let body = await request.json();
    try {
      const response = await TASKS.put("kanban-data", JSON.stringify(body));
      return JSON.stringify(body);
    } catch {
      return generalServerError;
    }
  } else {
    return generalClientError;
  }
};

const constructResponse = (response) => {
  return new Response(response, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
  });
};

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.url.includes("/kanban-data")) {
    const response = await handleFetchTasks(request);
    return constructResponse(response);
  } else
    return constructResponse(
      JSON.stringify({
        success: false,
        data: null,
        errors: [{ code: 404, text: "route not found" }],
      })
    );
}
