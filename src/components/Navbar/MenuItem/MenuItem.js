import React from 'react'
import "./menuItem.scss"

const MenuItem = ({ num, id, text, handleScreenChange, currentPage}) => {
    return (
        <div className="menuItem" onClick={() => handleScreenChange(id)}>
            <div className="textContainer">
                <h6>
                    <span>{num}</span>
                    
                    {text}
                </h6>
            </div>
            <div className={currentPage === id ? "indicator active" : "indicator"}></div>
        </div>
    )
}

export default MenuItem
