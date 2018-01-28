import {INCREMENT, DECREMENT} from './actionType'

const mutations = {
  [INCREMENT] (state, data) {
    state.addCount = state.addCount + data
  },
  [DECREMENT] (state, data) {
    state.subCount = state.subCount + data
  }
}

export default mutations
