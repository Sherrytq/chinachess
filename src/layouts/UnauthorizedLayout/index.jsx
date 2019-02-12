import React, { Component } from "react";
import { BrowserRouter,Switch, Route } from 'react-router-dom'

import Login from '@/views/Login'

import "./index.less";

const  UnauthorizedLayout = () => (
      <Switch>
        <Route path="/login" component={Login}/> 
        <Route path="/login"/>
      </Switch>
  )

export default UnauthorizedLayout;
