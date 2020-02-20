// Creating a unique ID utility function
export function uuid () {
  return Math.random().toString(16).slice(2)
}

// saving it to local storage
export function saveStatePlugin (store) {
  store.subscribe(
    (mutation, state) => localStorage.setItem('boards', JSON.stringify(state.boards))
  )
}
