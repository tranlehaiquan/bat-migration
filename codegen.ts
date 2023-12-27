import dotenv from "dotenv";
dotenv.config();

import type { CodegenConfig } from '@graphql-codegen/cli';

const TOKEN = process.env.TOKEN;

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    "https://api.skedulo.com/graphql/graphql": {
      headers: {
        "Authorization": `Bearer ${TOKEN}`
      }
    }
  },
  documents: ["./src/query.gql"],
  generates: {
    // "src/generated/graphql.ts": {
    //   plugins: ["typescript", "typescript-resolvers"]
    // },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    },
    'src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        rawRequest: true
      },
    },
  }
};

export default config;
