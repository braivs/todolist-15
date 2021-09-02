import React from 'react'
import './App.css'
import {Button, Container, IconButton, Toolbar, Typography} from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress';
import AppBar from '@material-ui/core/AppBar';
import {Menu} from '@material-ui/icons'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'

function App() {

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <LinearProgress color="secondary" />
            <Container fixed>
                <TodolistsList/>
            </Container>
        </div>
    )
}

export default App
