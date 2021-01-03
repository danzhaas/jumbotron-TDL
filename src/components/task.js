import React from "react"
import { Button, Card, Checkbox, Elevation } from "@blueprintjs/core"
import axios from 'axios'

// // How to access the back end
            // const newUser = {
            //     name, 
            //     email, 
            //     password
            // }

            // try {
            //     const config = {
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     }

            //     const body = JSON.stringify(newUser);
                
            //     // successful response returns a jwt
                // const res = await axios.post('/api/users', body, config);
            //     console.log(res.data);
            // } catch (err) {
            //     console.error(err.response.data)
            // }


const Task = () => {
    return (
        <Card interactive={true} elevation={Elevation.TWO} >
            <div className="row">
                <Checkbox />
                <h5>Task description</h5>
            </div>
            <div className="row w-100">
                <Button id="focus-btn">Focus</Button>
                <Button id="delete-btn">Delete</Button>
            </div>
            <p>Time complete: <span></span></p>
        </Card>
    )
}

export default Task