import React from 'react';
import { NavBar } from '../Components/NavBar/NavBar';
import { AddTask } from '../Components/AddTask/AddTask';

export const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <AddTask></AddTask>
        </div>
    )
}