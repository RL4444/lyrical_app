# Lyrical-GraphQL

Lyrical is built using React, React-Router, MongoDB, React-Apollo, GraphQL (Express). This app allows users to create their own songs and lyrics, and letting other users vote on which lyrics they like.

The app is part of Stephen Grider's Udemy Course of 'GraphQL with React: The Complete Developers Guide' (https://www.udemy.com/graphql-with-react-course), which I cannot recommend highly enough.

To test this app, clone this repo and run 'npm install' or 'yarn install'.

Create a mongo database (at cloud.mongodb.com || mlab) to store your info for the app. Obtain the collection's URI link to create sync a data collection for this app. (This app is configured to work with a live database instead of a local setup)

Add your username and password credentials for MongoDB as per example in ./server/server.js

##You can also create a file at the root of the app's directory called 'secrets.json' as per what I have done to protect my credentials.

##MAKE SURE CREDENTIALS ARE NEVER EXPOSED ON GitHub!

Launch the local dev server with the command 'npm run dev' or 'yarn run dev' depending on your package manager.

You can navigate to localhost:4000/ in your browser to start using this app, and localhost:4000/graphql to test the app's api.

Have fun!
