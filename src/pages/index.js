import React from "react"
import { Button } from "@blueprintjs/core"
import Task from '../components/task'
import Layout from "../components/layout"
import axios from 'axios'


const IndexPage = () => {
  return(
    <Layout>
      <p>This To Do List can toggle your list's view so you see only one task at a time, made jumbo, so it's easier to stay focused. </p>
      <br />
      <Button>
        Unfocus / Refocus
      </Button>
      {/* Task list box */}
      <div>  
        <Task />
      </div>
    </Layout>
  )
}

export default IndexPage
