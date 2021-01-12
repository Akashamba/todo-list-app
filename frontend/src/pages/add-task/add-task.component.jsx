import 'date-fns';
import React, {useState} from 'react';
import {Container, TextField, Button, Slider, Typography, Grid} from '@material-ui/core';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardTimePicker,
//     KeyboardDatePicker,
//   } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import './add-task.styles.css';

export default function AddTask() {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [priority, setPriority] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = {
            task: task,
            description: description,
            date: date,
            time: time,
            priority: priority
        }
        console.log(form);
        setDate();setTime();
    }

    return(
        <Container className="container">
            <br/><br/>
            <div className="card">
                <form id="form" onSubmit={handleSubmit}>

                    <TextField name="task" label="Task" value={task} autoComplete="false" required 
                            onChange={event => setTask(event.target.value)} />
                    <br/><br/>
                    <TextField name="description" label="Description" value={description} autoComplete="false" 
                            onChange={event => setDescription(event.target.value)} helperText="An optional description of your task" />
                    <br/><br/>
                    <Grid container>
                        <Grid item xs={11}>
                            <Typography>Priority</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography>{priority}</Typography>
                        </Grid>
                    </Grid>
                    <Slider value={priority} onChange={(e, value) => setPriority(value)} 
                            min={0} max={5} />
                    <Typography id="priority-helper">Highest Priority: 5</Typography>
                    {/*<br/><br/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardTimePicker margin="normal" id="time-picker" label="Time picker"
                                            value={time} onChange={time => setTime(time)} 
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                            />
                                        </MuiPickersUtilsProvider>*/}
                    <br/><br/><br/>
                    <Button fullWidth variant="outlined" color="primary" type="submit">Add Task</Button>
                </form>
            </div>
            <br/>
        </Container>
    )
}