import rootReducer from './reducers/index'
import { loadState, saveState } from './LocalStorage'
import { createStore } from 'redux'

const persistentState = loadState()

const store = createStore(
    rootReducer,
    persistentState
)

store.subscribe( () => {
    saveState({
        justiceReducer: store.getState().justiceReducer
    })
})

export default store