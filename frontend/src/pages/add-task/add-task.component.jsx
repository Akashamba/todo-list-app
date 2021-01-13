import React, {useState} from 'react';
import {Container, TextField, Button, Slider, Typography,
        FormControl, Grid} from '@material-ui/core';
import DateTimePicker from 'react-datetime-picker'
import './add-task.styles.css';

export default function AddTask() {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [reminder, setReminder] = useState(new Date());
    const [priority, setPriority] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = {
            task: task,
            description: description,
            reminder: reminder,
            priority: priority, 
            createdDate: new Date(),
        }
        console.log(form);
        setTask('');
        setDescription('');
        setReminder('');
        setPriority(1);
    }

    return(
        <Container className="container">
            <br/><br/>
            <div className="card">
                <form id="form" onSubmit={handleSubmit}>

                    <TextField name="task" label="Task" value={task} autoComplete="false" required 
                            onChange={event => setTask(event.target.value)} />
                    
                    <TextField name="description" label="Description" value={description} autoComplete="false" 
                            onChange={event => setDescription(event.target.value)} helperText="An optional description of your task" />
                    
                    <FormControl>
                        <Grid container>
                            <Grid item xs={11}>
                                <Typography id="priority-label">Priority</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography>{priority}</Typography>
                            </Grid>
                        </Grid>
                        <Slider value={priority} onChange={(e, value) => setPriority(value)} 
                        min={0} max={5} />
                        <Typography id="priority-helper">Highest Priority: 5</Typography>
                    </FormControl>
                    <FormControl variant="standard">
                        <label id="datetime-label" htmlFor="datetime">Reminder</label>
                        <DateTimePicker format="dd-MM-y h:mm a" minDate={new Date()} value={reminder} onChange={value => setReminder(value)} />
                    </FormControl>
                    
                    <Button fullWidth variant="outlined" color="primary" type="submit">Add Task</Button>
                </form>
            </div>
            <br/>
        </Container>
    )
}