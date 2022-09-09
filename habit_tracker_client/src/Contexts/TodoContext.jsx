import React, { createContext, useState } from "react";
export const TodoContext = createContext();

// This will hold information and pass it down to the children
// The children will use this information to render the correct information
export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([])

    return (
        <TodoContext.Provider value={[ todos, setTodos ]}>
            {props.children}
        </TodoContext.Provider>
    );
}
