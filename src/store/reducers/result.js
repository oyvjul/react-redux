import * as actionTypes from "../actions";

const initState = {
    results: []
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            //concat: generates new array, immutable way - best way!
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
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