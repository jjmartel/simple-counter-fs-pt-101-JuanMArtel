import React from "react";

const SimpleCounter = (props) => {
    return (
            <div className="fs-3 bg-black p-3 text-white justify-content-between" > 
            {props.dataValues} 
            <span className="bg-dark rounded-3 px-3 py-2">{props.digitOne}</span>
            <span className="bg-dark rounded-3 px-3 py-2">{props.digitTwo}</span>
            <span className="bg-dark rounded-3 px-3 py-2">{props.digitThree}</span>
            <span className="bg-dark rounded-3 px-3 py-2">{props.digitFour}</span>
            <span className="bg-dark rounded-3 px-3 py-2">{props.digitFive}</span>
            <span className="bg-dark rounded-3 px-3 py-2">{props.digitSix}</span>


             </div>



    )
}

export default SimpleCounter