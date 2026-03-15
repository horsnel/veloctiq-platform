export default {
  async fetch(request, env) {
    // This allows your frontend to talk to Supabase via Cloudflare
    return new Response("Veloctiq Engine is Live", {
      headers: { "content-type": "text/plain" },
    });
  },
};
