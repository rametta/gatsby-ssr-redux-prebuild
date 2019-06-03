import React from 'react'
import { Provider } from 'react-redux'
import createStore from './src/createStore'

export const wrapRootElement = ({ element }) => {
  const store = createStore({ count: `'i am generated client side in redux'` })
  return <Provider store={store}>{element}</Provider>
}