import { getSdk } from './generated/graphql';
import { GraphQLClient } from 'graphql-request';

const TOKEN = process.env.TOKEN;

console.log(TOKEN);

const client = new GraphQLClient('https://api.skedulo.com/graphql/graphql', {
  headers: {
    "Authorization": `Bearer ${TOKEN}`
  }
})

const sdk = getSdk(client);

export default sdk;
