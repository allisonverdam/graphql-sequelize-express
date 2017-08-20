import {
  GraphQLList,
  GraphQLString,
  GraphQLInt
} from 'graphql'
import Person from '../../schemas/person'
import DB from '../../../db'

export default {
  type: new GraphQLList(Person),
  args: {
    id: {
      type: GraphQLInt
    },
    email: {
      type: GraphQLString
    }
  },
  resolve(root, args) {
    return DB.models.person.findAll({
      where: args
    })
  }
}