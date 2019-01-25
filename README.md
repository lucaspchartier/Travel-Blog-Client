# Travel Blog Client

### What it does
This is a travel-themed application where an authenticated user can add and
compile a list of hotels that they've traveled to in their lifetime. This
application should get users to give into the urge to travel more and explore
some authentic places that they want to travel to!

### Links
* [Travel Blog API](https://github.com/lucaspchartier/Travel-Blog-API/)
* [Deployed Client](https://lucaspchartier.github.io/Travel-Blog-Client/)
* [Deployed Heroku](https://intense-sea-84286.herokuapp.com/)

### List of technologies used
* HTML
* CSS
* JavaScript
* ReactJS

### Unsolved problems for future entities
As of right now, I have not discovered any outstanding and critical bugs that
hinder the functionality of this application. On the other hand, given that
this is a travel-themed application, I do want to create another table in rails
where a user can have many flights that include an airline, a flight number, a
departing destination, and an arriving destination. Furthermore, I do want to
include a Google Maps/Location API within the application so that the location
of the hotel shows on the user's list of hotels, as well as potentially
incorporating a 3rd party travel API (i.e. TripAdvisor, Expedia) to include
various airlines for the flight that the user adds to their list.

### Planning, process, and problem-solving strategies
Within the first day of project week, I was already drawing out my wireframes
and designing my ERDs, and I was also able to accomplish creating a single
hotels table under user in Rails. After getting all of my curl scripts to work
in my back end, I then decided to focus all of my attention to getting my front
end fully functional using React. While navigating through each component and
fully rendering each one was a bit of a challenge, since I am fairly new to
React after, all, I used previous React lessons from the week before as a guide
to make sure I had all of my states correct, that nothing was causing a
component to crash, etc. I also embraced the beauty of the issue cue, where
instructors would guide me to very minor things in my code that caused the
client to break, such as missing `hotel` in a particular state while having
something else in its place.

### Wireframes and user stories
![Wireframes](https://i.imgur.com/ZvayLXj.jpg)

* As a user, I want to be able to sign up
* As a user, I want to be able to sign in after signing up
* As a signed in user, I want to be able to add a single hotel to my list
* As a signed in user, I want to be able to see all of my hotels
* As a signed in user, I want to be able to view a single hotel
* As a signed in user, I want to be able to edit a single hotel
* As a signed in user, I want to be able to delete a single hotel
* As a signed in user, I want to change my password at any given time
* As a signed in user, I want to sign out at any given time

### Screenshot
![Screenshot](https://i.imgur.com/B7xcX5V.png)

### Set up and installation instructions
1. Fork and clone this repository
2. Change into new directory
3. Create and checkout to your own branch
4. Install dependencies with `npm install`
