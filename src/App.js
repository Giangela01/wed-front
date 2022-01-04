import Header from "./components/Header"
import GuestNav from "./components/GuestNav"
import Story from "./pages/Story"
// import UserNav from "./pages/UserNav"
import Home from "./pages/Home"
import Announcements from "./pages/Announcements"
import Rsvp from "./pages/Rsvp"
import Location from "./pages/Location"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
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
      </Switch>
      </>
  );
}

export default App;
