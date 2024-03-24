export default [
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "frame-src": [
            "http://localhost:*",
            "self",
            "sandbox.embed.apollographql.com",
          ],
        },
      },
    },
  },
  "strapi::logger",
  "strapi::errors",
  "strapi::poweredBy",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "https://new-west-app.vercel.app",
        "https://new-west-server-production.up.railway.app",
      ],
      methods: "*",
      headers: "*",
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
