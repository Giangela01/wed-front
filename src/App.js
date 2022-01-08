import Header from "./components/Header"
import GuestNav from "./components/GuestNav"
import Story from "./pages/Story"
import UserNav from "./components/UserNav"
import UserMain from "./components/UserMain"
import UserEdit from "./components/UserEdit"
import Home from "./pages/Home"
import Announcements from "./pages/Announcements"
import Rsvp from "./pages/Rsvp"
import Location from "./pages/Location"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import LocationDetails from './components/LocationDetails'

import React, { useState, useEffect } from "react";

import { Switch, Route } from "react-router-dom";
import './App.css';
import './styles.scss';

function App(props) {
  //Updates URL
  const urlUpdate = "https://wed-backend.herokuapp.com/updates/";
  const [updates, setUpdates] = useState([]);

  const nullUpdate = {
    subject: "",
    details: "",
  };
  const [targetUpdate, setTargetUpdate] = useState(nullUpdate);
  const getUpdate = async () => {
    const responseUpdate = await fetch(urlUpdate);
    const dataUpdate = await responseUpdate.json();
    setUpdates(dataUpdate);
  };
  const addUpdate = async (newUpdate) => {
    const response = await fetch(urlUpdate, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUpdate),
    });
  
    // get updated list of todos
    getUpdate();
  };
  const getTargetUpdate = (update) => {
    setTargetUpdate(update);
    props.history.push("/user/edit");
  };
  const updateUpdate = async (update) => {
    const response = await fetch(urlUpdate + update.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    });
  
    // get updated list of todos
    getUpdate();
  };

  useEffect(() => {
    getUpdate();
  }, []);

  return (
    <>
      <Header />
      <GuestNav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/our-story">
          <Story />
        </Route>
        <Route 
          path="/announcements"
          render={(routerProps) => <Announcements {...routerProps} updates=
          {updates}/>}>
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/location">
          <Location />
          <LocationDetails />
        </Route>
        <Route exact path="/RSVP">
          <Rsvp />
        </Route>
      </Switch>
      <Route exact path="/user/home">
          <UserNav />
          <UserMain />
        </Route>
        <Route exact path="/user/update">
          <UserNav />
          <UserEdit />
        </Route>
      <Footer />
      </>
  );
}

export default App;
