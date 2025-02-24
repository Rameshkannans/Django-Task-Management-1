
import React, { useState, useEffect } from 'react';
import { get_tasks } from '../endpoints/api';

const Menu = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await get_tasks();
            if (tasks) {
                setTasks(tasks);
            }
        };
        fetchTasks();
    }, []);

    return (
        <div>
            <h1>Welcome back, user</h1>
            <p>
                {tasks.map((task) => (
                    <span key={task.id}>{task.title}</span>
                ))}
            </p>
        </div>
    );
};

export default Menu;
