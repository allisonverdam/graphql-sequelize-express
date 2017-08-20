import {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType
} from 'graphql';
import * as queries from './queries';
import * as mutations from './mutations';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: queries
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: mutations
  })
});

export default schema;