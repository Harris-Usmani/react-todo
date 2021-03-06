import React from 'react'
import { CalendarDate, CaretUp } from 'react-bootstrap-icons';

function Calendar() {
    
    //Constant menu items
    const calendarItems = ['today', 'next 7 days', 'all days']

    return (

        <div className="Calendar">

            <div className='header'>
                <div className='title'>
                    <CalendarDate size='18' />
                    <p>Calendar</p>
                </div>

                <div className='btns'>
                    <span>
                        <CaretUp size='20' />
                    </span>
                </div>
            </div>

            <div className='items'> 

                {
                    calendarItems.map(item => 
                        <div className='item' key={item}>
                            {item}
                        </div>
                        
                        ) 
                }

            </div>
                
        </div>

    )


}

export default Calendar;