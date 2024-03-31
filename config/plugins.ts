// import path from "path";

export default {
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      },
      actionOptions: {
        upload: {
          transformation: [{ fetch_format: "webp" }],
        },
        delete: {},
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
      /* generateArtifacts: true,
      artifacts: {
        schema: path.join(
          __dirname,
          "..",
          "..",
          "graphql/graphql_schema.graphql"
        ),
        typegen: path.join(__dirname, "..", "..", "graphql/graphql_types.d.ts"),
      }, */
    },
  },
  "apollo-sandbox": {
    // enables the plugin only in development mode
    // if you also want to use it in production, set this to true
    // keep in mind that graphql playground has to be enabled
    enabled: process.env.NODE_ENV === "production" ? false : true,
    // endpoint: "https://tunneled-strapi.com/graphql", // OPTIONAL - endpoint has to be accessible from the browser
  },
};
