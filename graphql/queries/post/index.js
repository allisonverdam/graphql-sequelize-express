import {
  GraphQLList,
  GraphQLInt
} from 'graphql'
import Post from '../../schemas/post'
import DB from '../../../db'

export default {
  type: new GraphQLList(Post),
  args: {
    id: {
      type: GraphQLInt
    }
  },
  resolve(root, args) {
    return DB.models.post.findAll({
      where: args
    })
  }
}