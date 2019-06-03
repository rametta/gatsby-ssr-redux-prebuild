import React from 'react'
import { Provider } from 'react-redux'
import createStore from './src/createStore'
import prebuilddata from './prebuilddata.json'

export const wrapRootElement = ({ element }) => {
  const store = createStore(prebuilddata)
  return <Provider store={store}>{element}</Provider>
}