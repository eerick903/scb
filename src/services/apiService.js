import { Get, Post, Put, Delete } from 'src/helpers/fetchHelper'


const SERVER_URL = 'https://jsonplaceholder.typicode.com'

export default {
  fetchUsers: () => Get(`${SERVER_URL}/users`)
}