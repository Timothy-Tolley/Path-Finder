import {baseLevel1} from './path-data-1'
import {baseLevel2} from './path-data-2'

// First level
export const startPoint = [{
  label: '',
  options: [
    {
      title: 'RETAIL ASSISTANT',
      description: 'Your Friendly Store Assistant',
      id: 100,
      selected: 'selected',
      responses: baseLevel1
    },
    {
      title: 'STOCK ROOM ASSISTANT',
      description: 'Your Go-To Stock Assistant',
      id: 101,
      selected: 'selected',
      responses: baseLevel2
    }
  ]
}]
