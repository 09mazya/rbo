import React from "react";

import './BLeft.css'
function BLeft(){
    return (
        <div className="BLeft">
            <button className="bLeftButton active">Категории отчетов:</button>
            <button className="bLeftButton">Суточные отчеты</button>
            <button className="bLeftButton">Недельные отчеты</button>
            <button className="bLeftButton">Месячные отчеты</button>
            <button className="bLeftButton">Квартальные отчеты</button>
            <button className="bLeftButton">Годовые отчеты</button>
        </div>
    )
}

export default BLeft;