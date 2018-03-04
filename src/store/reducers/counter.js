import * as actionTypes from "../actions";

const initState = {
    counter: 0
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter +1;
            return newState;
        case actionTypes.DECREMENT:
            //Best way, copy to a new object with spread operator
            return {
                ...state,
                counter: state.counter - 1
            };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            };
        case actionTypes.SUB:
            return {
                ...state,
                counter: state.counter - action.val
            };
    }

    return state;
}

export default reducer;