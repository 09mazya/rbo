import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BCenter.css'
function BCenter() {
    const [date, setDate] = useState(new Date());
    console.log(date);
    return (
        <div className="BCenter">
            <div className="bCenterHeader">Выберите дату отчета:</div>
            <div className="Calender-rbo">
                <div className='calendar-container'>
                    <Calendar
                        onChange={setDate}
                        value={date}
                        selectRange={true}
                    />
                </div>
                <div className="frame">
                    <div className="reportNumber">
                        <p>Отчёты :</p>
                        <div className="reportButton">
                            <button>report 1</button>
                            <button>report 2</button>
                            <button>report 3</button>
                        </div>
                    </div>
                    <div className="email-rbo">
                        <p>Адрес почты, на которую будет выслан отчёт по готовности:</p>
                        <div className="formInput">
                            <input disabled type="text" placeholder="arstanbek.rahimov@cbk.kg" />
                            <button>Сформировать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BCenter;

