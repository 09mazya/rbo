import React, { useState } from "react";

import './BLeft.css'
const BLeftButton = [
    {
        id: 1,
        textName: "Категории отчетов",
    },
    {
        id: 2,
        textName: "Суточные отчеты"
    },
    {
        id: 3,
        textName: "Недельные отчеты"
    },
    {
        id: 4,
        textName: "Месячные отчеты"
    },
    {
        id: 5,
        textName: "Квартальные отчеты"
    },
    {
        id: 6,
        textName: "Годовые отчеты"
    }
]

function BLeft(props) {
    const [style, setStyle] = useState("")
    function handleClick() {

    }
    return (
        <div className="BLeft">
            {
                BLeftButton.map(item => (
                    <div key={item.id}>
                        <button className="bLeftButton" onClick={handleClick}>{item.textName}</button>
                    </div>
                ))
            }
        </div>
    )
}

export default BLeft;