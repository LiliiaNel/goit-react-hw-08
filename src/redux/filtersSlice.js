import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction("filters/change");

const initialState = {
    name: ""
};

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case "filters/change":
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state;
    
    }
}

