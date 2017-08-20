import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString
} from 'graphql'
import Person from './person'

export default new GraphQLObjectType({
  name: 'Post',
  description: 'This represent a Post',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(person) {
          return person.id
        }
      },
      title: {
        type: GraphQLString,
        resolve(person) {
          return person.title
        }
      },
      content: {
        type: GraphQLString,
        resolve(person) {
          return person.content
        }
      },
      person: {
        type: Person,
        resolve(post) {
          return post.getPerson()
        }
      }
    }
  }
})