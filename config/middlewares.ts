export default [
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-src": [
            "http://localhost:*",
            "self",
            "sandbox.embed.apollographql.com",
          ],
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          upgradeInsecureRequests: null,
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
      origin: process.env.CORS_ORIGIN.split(","),
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
