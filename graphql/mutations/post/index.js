import {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import Post from '../../schemas/post'
import DB from '../../../db'

export default {
  type: Post,
  args: {
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    content: {
      type: new GraphQLNonNull(GraphQLString)
    },
    personId: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve(_, args) {
    return DB.models.post.create({
      title: args.title,
      content: args.content,
      personId: args.personId
    })
  }
}