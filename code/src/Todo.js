import React from 'react'
import './Todo.css'
import { ListItem, List, ListItemText, ListItemAvatar, Button } from '@material-ui/core';
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {  
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="I have to DO this"/>
            </ListItem>
            
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
            
        </List>
    )
}

export default Todo
