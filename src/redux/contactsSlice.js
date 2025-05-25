import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add");
export const deleteContact = createAction("contacts/delete");

const initialState = {
    items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
};

export default function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case "contacts/add":
            return {
                ...state,
                items: [...state.items, action.payload],
            }
   
        case "contacts/delete":
            return {
                ...state,
                items: state.items.filter(contact => contact.id !== action.payload),
            }
        
         default:
            return state;
    }
    
}


