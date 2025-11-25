export default {
  async fetch(request) {
    try {
      const { pathname } = new URL(request.url);

      if (request.method !== "POST") {
        return new Response(JSON.stringify({ error: "POST only" }), {
          status: 405,
          headers: { "Content-Type": "application/json" }
        });
      }

      const input = await request.text();

      let json;
      try {
        json = JSON.parse(input);
      } catch (err) {
        return new Response(
          JSON.stringify({ valid: false, error: err.message }),
          { headers: { "Content-Type": "application/json" }, status: 200 }
        );
      }

      if (pathname === "/format") {
        return new Response(
          JSON.stringify({
            valid: true,
            formatted: JSON.stringify(json, null, 2),
            minified: JSON.stringify(json)
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }

      if (pathname === "/validate") {
        return new Response(
          JSON.stringify({
            valid: true,
            error: null
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }

      if (pathname === "/minify") {
        return new Response(
          JSON.stringify({
            minified: JSON.stringify(json)
          }),
          { headers: { "Content-Type": "application/json" } }
        );
      }

      return new Response(JSON.stringify({ error: "Invalid endpoint" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });

    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
};
