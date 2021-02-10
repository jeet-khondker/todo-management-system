import React from 'react'

import { useState } from "react"

import { Button, List, ListItem, ListItemText, Modal, FormControl, InputLabel, Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

import database from "../firebase"

import '../ToDo.css';

// Function : Get Modal Position
function getModalPosition() {
    const TOP = 35
    const LEFT = 35

    return {
        top : `${ TOP }%`,
        left : `${ LEFT }%`,

    }
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

function ToDo(props) {

    const classes = useStyles();

    const [modalPosition] = useState(getModalPosition)

    const [open, setOpen] = useState(false)

    const [input, setInput] = useState()

    const updateTodo = () => {
        // Update the todo with the new input text
        database.collection("todos").doc(props.title.id).set({ title : input }, { merge : true })
        setOpen(false)
    }

    return (
        <>

            <Modal
                open={open}
                onClose={ event => setOpen(false) }
                >
                    <div style={ modalPosition } className={ classes.paper }>
                        <h1>Edit ToDo Task Item</h1>
                        <form>
                            <FormControl>
                                <InputLabel>Edit Your ToDo</InputLabel>
                                <Input placeholder={ props.title.todoTitle } value={ input } onChange={ event => setInput(event.target.value) } />
                            </FormControl>
                            <Button disabled={ !input } type="submit" onClick={ updateTodo } variant="contained" color="primary">Update ToDo Task</Button>
                        </form>
                    </div>
            </Modal>

            <List className="todo__list">
                <ListItem>
                    <ListItemText primary={ props.title.todoTitle } secondary="Deadline" />
                    <Button onClick={ event => setOpen(true) } variant="contained" color="primary" startIcon={ <EditIcon /> }>Edit</Button>
                    &emsp;
                    <Button 
                        onClick={ event => { database.collection("todos").doc(props.title.id).delete() } } 
                        variant="contained" 
                        color="secondary" 
                        startIcon={ <DeleteForeverIcon /> }>
                            Delete
                    </Button>
                </ListItem>
                
            </List>

        </>
    )
}

export default ToDo
