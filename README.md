## Bus Ticket Booker App (React)

- `Live` : <https://shubhamshekhar23.github.io/Bus-Ticketer-React/>

![Project preview](docs/preview.gif)

### How to run this app

- Clone the repo
- Run `npm install`
- Run `nopm start` and go to <http://localhost:3000>

### Features

- When app loads , it populates the local storage with mock data
- In Dashboard screen, user can see all the reseravtions made
- User can edit the user details using edit button and also delete a reservation
- Using nav menu , user can go to reservation screen where they can select multiple seats
- After selecting seats, user can enter details like name and email, all details are manadatory
- After submitting, user is navigated back to dashboard screen with the new reservation listed

## About Application

- It doesnt have a backend server, all data is stored in localstorage, so refreshing the page doesnt loose data
- It makes use of react-hook-form library to handle forms and error messages
- It makes use of generrating id from uuid librarry to store in client storage
