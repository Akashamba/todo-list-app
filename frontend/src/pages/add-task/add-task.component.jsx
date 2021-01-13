import React, {useState} from 'react';
import {Container, TextField, Button, Slider, Typography,
        FormControl, Grid} from '@material-ui/core';
import './add-task.styles.css';

export default function AddTask() {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [reminder, setReminder] = useState('');
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
                    <FormControl>
                        <label id="datetime-label" for="datetime">Reminder</label>
                        <TextField id="datetime" type="datetime-local" value={reminder} onChange={event => setReminder(event.target.value)} />
                    </FormControl>
                    
                    <Button fullWidth variant="outlined" color="primary" type="submit">Add Task</Button>
                </form>
            </div>
            <br/>
        </Container>
    )
}