# Don and Marge Wedding website
A mock website built primarily with Ruby on Rails and React Frontend that allows user and guest user to update RSVP and view wedding announcements posted by the couple users.

## Technologies used
* Javascript
* HTML
* CSS
* SASS
* React
* Bootstrap
* Google Maps API

## Website Usage
Home Page
![Home Page](https://i.imgur.com/iYFAoKF.png)
Announcement Page
![Announcement Page](https://i.imgur.com/xqlRG1S.png)

#### React Router Table 
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

### Initial Wireframes
![Content Page](https://i.imgur.com/RzTY7sN.png)
![RSVP Page](https://i.imgur.com/SBil13U.png)

### Deployed Live Website
* For SuperUser: https://don-n-marge.netlify.app/user
* For Guest User: https://don-n-marge.netlify.app/

#### Future Enhancements 
* User Authentication
* Search Section for RSVP

#### Contributing
Pulls are always welcome. Any contributions and fixes you make are greatly appreciated. Thank you in advance!
