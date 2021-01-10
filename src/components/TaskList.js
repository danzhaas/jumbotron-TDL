import React from "react"
import { Button } from "@blueprintjs/core"
import Task from '../components/Task'
import axios from 'axios'

const TaskList = ({ children }) => {

    var tasks;
    const onOpen = async (req,res) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const res = await axios.get('http://localhost:5000/api/task/', config);
            console.log(res);
            tasks=({res});
            console.log(tasks);
        } catch (err) {
            console.error(err.response.data)
        }
    }
    onOpen();

    const listname = "Current";

    var organizedTasks;

    function organizeTasks(filter) {

        // input tasks
        // filter: by done or not or both

        // output tasks organized in their trees with 
            //level 0's first
            //then build each task underneath it
        
        // return array with tasks in order
        return organizedTasks
    }

        // function renderTasks() {
    //     var taskItems = tasks.forEach(task => (
    //         <Task {...task} />
    //     ));
    //     return taskItems
    // }

    return (
        <>
            <div className="row">
                <h2>{ listname }</h2>
                <Button id="list-toggle">{"See Completed"}</Button>
            </div>
            <p>{tasks}</p>
            {/* {tasks.map(task => (<Task {...task} />))} */}
            {/* {renderTasks()} */}
            <Button id="add-task">Add Task</Button>
        </>
    )
}

export default TaskList