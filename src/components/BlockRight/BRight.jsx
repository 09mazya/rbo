import React from "react";
import arsMen from '../../Assets/arsMen.svg'
import './Bright.css'
function BRight() {
    return (
        <div className="BRight">
            <div className="profile">
                <div className="imgInfo">
                    <img src={arsMen} alt="" />
                    <p>Арстанбек Рахимов</p>
                    <span>Старший специалист</span>
                </div>
                <div className="editButton">
                    <button>Edit Profile</button>
                </div>
            </div>
            <div className="report">
                <p className="RRules">Правила формирования отчёта:</p>
                <p className="R-data">Дата начала и дата закрытия – выбирается пользователем. Дата закрытия может быть больше сегодняшнего дня на 14 дней.
                    При недельных отчетах Пользователь может задать диапазон только 1 неделю: с понедельника по воскресенье</p>
            </div>
        </div>
    )
}

export default BRight;