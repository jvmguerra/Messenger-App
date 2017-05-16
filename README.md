# Messenger

This is a Messaging Front-End project that allow users to send messages through the API, read messages, get chat information and timestamps.

The project was developed using the Angular framework and was initially generated using Angular CLI for simple dependency installation and development setup. LESS was used for styling.

Further development would include a login platform with authentication, changes in the Observables (and the API) to detect changes when a message is sent from the server.

This project implements the following features: 

* Responsive layout
* Simple user login
* Read group messages
* Get a list of user's messages
* Create a new group
* Send message
* Clear distinction between different users in chat using colors and initial letters association
* TSLint Enabled

## Development server

Before running, make sure you have NodeJS installed and you run `npm install` inside the project's directory.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project (after the installation of the dependencies). The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Future work

These are the topics I wasn't able to finish in the 1 week time frame:

* Unit tests
* End-to-end tests
* See the chat groups created by me, although the server responded with an id
* The implementation of a refresh to receive others users messages after a delay
