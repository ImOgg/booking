import React from 'react'

const Card = ({img}) => {
    
    return (
        <div>
            <div className="imgcontainer">
                <img src={img} alt="這是一間房" />
            </div>
        </div>
    )
}

export default Card