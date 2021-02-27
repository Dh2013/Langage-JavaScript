import './App.css';
import React from 'react';
import {Buttons} from '@material-ui/';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

   export default function App(){
  return(
   <AppBar position="static">
     <Toolbar>
       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
       <MenuIcon/>
       </IconButton>
       <Typography variant="" className={classes.title}>
       </Typography>
       <Button color="inherit">Create Account</Button>
       <Button color="inherit">Login</Button>
     </Toolbar>
   </AppBar>
  )};