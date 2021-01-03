import React, { useState } from 'react'

export const myContext = React.createContext()

const Provider = props => {
    // const testArray = [
    //     1599452160267,
    //     1599452759948
    // ];

    return (
        <myContext.Provider>
            {props.children}
        </myContext.Provider>
    )
};

export default ({ element }) => (
    <Provider>
        {element}
    </Provider>
);