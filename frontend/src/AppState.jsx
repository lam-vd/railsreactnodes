import React, { useContext, useReducer } from "react";

// INITIAL STATE

const  initialState = {
     url: "http://railsappnotes-93a099371508.herokuapp.com/",
};

// REDUCER
// action = {type: "", payload: ---}
const reducer = (state, action) => {
    switch(action.type){
        default:
            return state
    }
}

// AppContext

const AppContent = React.createContext(null)

export const AppState = (props) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        return <AppContent.Provider value={{state, dispatch}}>
            {props.children}
        </AppContent.Provider>;
};

// useAppState hook
export const useAppState = () => {
    return React.useContext(AppContent);
};