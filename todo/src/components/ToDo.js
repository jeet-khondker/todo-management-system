import React from 'react'

import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import database from "../firebase"

function ToDo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={ props.title.todoTitle } secondary="Deadline" />
                <Button onClick={ event => { database.collection("todos").doc(props.title.id).delete() } } variant="contained" color="secondary" startIcon={ <DeleteForeverIcon /> }>Delete</Button>
            </ListItem>
            
        </List>
    )
}

export default ToDo
