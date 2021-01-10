import React from "react"
import { Button } from "@blueprintjs/core"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from "../components/layout"
import TaskList from '../components/TaskList'
import Jumbotron from '../components/Jumbotron'
import axios from 'axios'

const IndexPage = () => {

  const onOpen = async (req,res) => {
    try {
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }

      // successful response returns a jwt
      const res = await axios.get('/api/task/');
      console.log(res);
    } catch (err) {
      console.error(err.response.data)
    }
  }

  const listname="current"

  return(
    // <Router>
      <Layout>
        <p>This app makes it easier for you to stay focussed by showing only one (jumbo-sized) task at a time. </p>
        <br />
        <Button> Unfocus / Refocus </Button>
        <TaskList />
      </Layout>
  )
}

export default IndexPage
