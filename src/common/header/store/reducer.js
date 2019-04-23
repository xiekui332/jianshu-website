const defaultState = {
    focused:false
}


export default (state = defaultState, action) => {
    if(action.type === 'search_focus'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = action.focused
        return newState
    }

    if(action.type === 'search_blur'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = action.focused
        return newState
    }
    return state
}