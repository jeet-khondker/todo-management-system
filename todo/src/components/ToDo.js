import React from 'react'

import { List, ListItem, ListItemText } from '@material-ui/core'

function ToDo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={ props.title } secondary="Deadline" />
            </ListItem>
        </List>
    )
}

export default ToDo
