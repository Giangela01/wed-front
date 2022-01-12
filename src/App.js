import Header from "./components/Header"
import GuestNav from "./components/GuestNav"
import Story from "./pages/Story"
import UserMain from "./components/UserMain"
import UserEdit from "./components/UserEdit"
import Home from "./pages/Home"
import Announcements from "./pages/Announcements"
import Rsvp from "./pages/Rsvp"
import Location from "./pages/Location"
import Footer from "./components/Footer"
import LocationDetails from './components/LocationDetails'
import ImgGallery from './components/ImgGallery'
import RsvpEdit from './components/RsvpEdit'
import EditForm from './components/EditForm'
import UserNew from './components/UserNew'

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
    getUpdate();
  };
  //GuestAPI
  const urlGuest = "https://wed-backend.herokuapp.com/guests/"
  const [guests, setGuests] = useState([]);
  const nullGuest = {
    firstName: "",
    lastName: "",
    email: "",
    plusOne: "",
    attend: "",
    comment: "",
  };

const [targetGuest, setTargetGuest] = useState(nullGuest);

const getGuests = async () => {
  const response = await fetch(urlGuest);
  const data = await response.json();
  setGuests(data);
};
const addGuests = async (newGuest) => {
  const response = await fetch(urlGuest, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newGuest),
  });
  getGuests();
};
const getTargetGuest = (guest) => {
  setTargetGuest(guest);
  props.history.push("/edit");
};

// Function to edit todo on form submission
const updateGuest = async (guest) => {
  const response = await fetch(urlGuest + guest.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(guest),
  });
  getGuests();
};

// Function to edit todo on form submission
const deleteGuest = async (guest) => {
  const response = await fetch(urlGuest + guest.id + "/", {
    method: "delete",
  });

  // get updated list of todos
  getGuests();
  props.history.push("/user/view");
};
useEffect(() => {
  getUpdate();
}, []);

useEffect(() => {
  getGuests();
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
        <Route path="/gallery">
          <ImgGallery />
        </Route>
        <Route exact path="/location">
          <Location />
          <LocationDetails />
        </Route>
        <Route
          path="/rsvp/:id"
          render={(routerProps) => (
            <RsvpEdit {...routerProps} guests={guests} edit={getTargetGuest}/>
          )}
        />
        <Route 
          path="/rsvp"
          render={(routerProps) => <Rsvp {...routerProps} guests=
          {guests}/>}>
          </Route>
        <Route
          path="/edit"
          render={(routerProps) => (
            <EditForm
              {...routerProps}
              initialGuest={targetGuest}
              handleSubmit={updateGuest}
              buttonLabel="Update Invite"
            />
          )}
        />
      </Switch>
      <Route path="/user/view"
      render={(routerProps) =>(
        <UserMain 
        {...routerProps}
        guests={guests}
        initialUpdate={nullGuest}
        deleteGuest={deleteGuest}/>
      )}>

      </Route>
        <Route path="/user/update"
        render={(routerProps) =>(
          <UserEdit 
          {...routerProps}
          initialUpdate={nullGuest}
          handleSubmit={addUpdate}
          buttonLabel="Announce" />
        )}>
        </Route>
        <Route exact path="/user"
      render={(routerProps) =>(
        <UserNew 
        {...routerProps}
        guests={guests}
        initialAdd={nullGuest}
        handleAdd={addGuests}
        buttonLabel="Add Guest" />
      )}>
      </Route>
      <Footer />
      </>
  );
}

export default App;
