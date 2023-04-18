import React from 'react';

const Hide = ({condition,children}) => {
    return (
        <>
            {!condition ? (
                {children}
            ) : (
                <div></div>
            )}
        </>
    );
};

export default Hide;