
export const getIncrementCount = ({ commit }, data) => {
  return commit('INCREMENT', data)
}

export const getDecrementCount = ({ commit }, data) => {
  return commit('DECREMENT', data)
}
