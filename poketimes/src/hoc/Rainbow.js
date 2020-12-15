import React from 'react'

const Rainbow = (WrappedComponent) => {


    const colors = ['blue', 'green', 'red', 'yellow', 'pink', 'purple'];
    const randomNumber = colors[Math.floor(Math.random() * 5)];
    const className = randomNumber + '-text';

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow
