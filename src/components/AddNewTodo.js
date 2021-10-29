import React, {useState} from 'react'
import Modal from './Modal'
import {Bell} from 'react-bootstrap-icons'
import {CalendarDay} from 'react-bootstrap-icons'
import {Clock} from 'react-bootstrap-icons'
import {Palette} from 'react-bootstrap-icons'
import {X} from 'react-bootstrap-icons'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from '@material-ui/pickers';
import { TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


function AddNewTodo() {

    // States
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState('');
    const [day, setDay] = useState(new Date());
    const [time, setTime] = useState(new Date());

    return (

        <div className="AddNewTodo">

            <div className='btn' onClick={() => setShowModal(true)}>

            <button>
                + New Todo
            </button>

            </div>



            <Modal showModal={showModal} setShowModal={setShowModal}>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <form>
                    <div className="text">
                        <h3>Add new todo!</h3>
                        <input 
                        
                            type='text'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder='Todo...'
                            autoFocus />
                    </div>

                    <div className='reminder'>
                        <Bell />
                        <p>Remind Me!</p>
                    </div>

                    <div className='pick-day'>

                        <div className='title'>
                            <CalendarDay />
                            <p>Choose a day!</p>
                        </div>

                        <DatePicker 
                            value={day}
                            onChange={day => setDay(day)}
                        />

                    </div>

                    <div className='pick-time'>

                        <div className='title'>
                            <Clock />
                            <p>Choose a time!</p>
                        </div>

                        <TimePicker 
                            value={time}
                            onChange={time => setTime(time)}
                        />

                    </div>

                    <div className='pick-project'>

                        <div className='title'>
                            <Palette />
                            <p>Choose a project!</p>
                        </div>

                        <div className='projects'>

                            <div className='project active'>
                                personal
                            </div>

                            <div className='project'>
                                work
                            </div>

                        </div>

                    </div>

                    <div className='cancel' onClick={(e) => setShowModal(false)}>
                        <X size='40'/>
                    </div>

                    <div className='confirm'>
                        <button> + Add Todo</button>
                    </div>

                </form>
            </MuiPickersUtilsProvider>
            </Modal>

        </div>

    )


}

export default AddNewTodo;