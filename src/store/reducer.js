import * as actionTypes from "./actions";

const initState = {
    counter: 0,
    results: []
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
        case actionTypes.STORE_RESULT:
            //concat: generates new array, immutable way - best way!
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            };
        case actionTypes.DELETE_RESULT:
            let newArray = [...state.results];
            newArray.splice(action.resultId, 1);
            const updatedArray = state.results.filter(result => result.id !== action.resultId);

            return {
                ...state,
                results: updatedArray
            };
    }

    return state;
}

export default reducer;