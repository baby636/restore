import React from 'react'
import ReactDOM from 'react-dom'
import Restore from 'react-restore'

import App from './App'
import * as actions from './actions'

const initialState = {
  visibility: 'All',
  todos: []
}

const store = Restore.create(initialState, actions)
const Root = Restore.connect(App, store)

ReactDOM.render(<Root />, document.getElementById('root'))
