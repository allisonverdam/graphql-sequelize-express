import {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import Person from '../../schemas/person'
import DB from '../../../db'

export default {
  type: Person,
  args: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(_, args) {
    return DB.models.person.create({
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email.toLowerCase()
    })
  }
}