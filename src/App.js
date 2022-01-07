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

// import React, { useState, useEffect } from "react";

import { Switch, Route } from "react-router-dom";
import './App.css';
import './styles.scss';

function App() {
  //API-KEY URL

  // useEffect(() => {
  //   getApi();
  // }, []);


  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <GuestNav />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/our-story">
          <GuestNav />
          <Story />
          <Footer />
        </Route>
        <Route exact path="/announcements">
          <GuestNav />
          <Announcements />
          <Footer />
        </Route>
        <Route exact path="/gallery">
          <GuestNav />
          <Gallery />
          <Footer />
        </Route>
        <Route exact path="/location">
          <GuestNav />
          <Location />
          <Footer />
        </Route>
        <Route exact path="/RSVP">
          <GuestNav />
          <Rsvp />
          <Footer />
        </Route>
        <Route exact path="/user/home">
          <UserNav />
          <UserMain />
          <Footer />
        </Route>
        <Route exact path="/user/edit">
          <UserNav />
          <UserEdit />
          <Footer />
        </Route>
      </Switch>
      </>
  );
}

export default App;
