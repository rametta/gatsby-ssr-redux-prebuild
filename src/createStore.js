import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return {...state, count: state.count + 1}
  }
  return state
}

const initialState = { count: 18 }

const createStore = mergedState => reduxCreateStore(
  reducer,
  {...initialState, ...mergedState}
)

export default createStore
