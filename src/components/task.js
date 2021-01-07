import React from "react"
import { Button, Card, Checkbox, Elevation } from "@blueprintjs/core"
import axios from 'axios'

function Task( props ) {

    const {
        id,
        description,
        done,
        level,
        subtasks,
        timecreated,
        timedone, 
        jumbotron
    } = props;

    // const onChange = e => setFormData({
    //     ...formData, [e.target.name]: e.target.value    // computed property name
    // })

    // const onChange = async e => {
    //     // How to access the back end
    //     const newTask = {

    //     }

    //     try {
    //         const config = {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         }

    //         const body = JSON.stringify(newTask);
            
    //         // successful response returns a jwt
    //         const res = await axios.post('/api/users', body, config);
    //         console.log(res.data);
    //     } catch (err) {
    //         console.error(err.response.data)
    //     }
    // }

    return (
        <Card interactive={true} elevation={Elevation.TWO} id={id} className={"jumbotron level-" + level} >
            <div className="row">
                <Checkbox checked={done} />
                <input className="bp3-input .modifier" type="text" dir="auto" value={description} />
            </div>
            <div className="row w-100">
                <Button id="focus-btn">Focus</Button>
                <Button id="add-subtask">Add Subtask</Button>
                <Button id="delete-btn">Delete</Button>
            </div>
            <div className="row w-100 float-right">
                <p>Time begun: <span>{Date(timecreated).toUTCString}</span></p>
            </div>
        </Card>
    )
}

export default Task