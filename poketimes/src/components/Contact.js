import React from 'react'

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000)
    return (
        <div className="container">
        <h4 className="center">Contact</h4>
        <p>lorem Ipsum the moon begged on the rain for the forgiveness of shackling them to th either</p>
    </div>
    )
  
}

export default Contact