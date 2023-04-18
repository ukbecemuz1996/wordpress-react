import React from 'react';

const Show = ({condition,children}) => {
    return (
        <>
            {condition ? children : (
                <div></div>
            )}
        </>
    );
};

export default Show;