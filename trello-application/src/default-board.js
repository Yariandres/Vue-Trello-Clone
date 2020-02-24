import { uuid } from './utils'

export default {
  name: 'MyApp',
  columns: [
    {
      name: 'Todo',
      tasks: [
        {
          description: '',
          name: 'First task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'Second task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'Thrid',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'In-progress',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'Done',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
}
