# NETFLIX JARAXA
A movie directory with a Netflix style.

Displaying movies and tv show from the [movie database API](https://developers.themoviedb.org/)

## Installation and running the application 🚀

Based on the [create react app](https://create-react-app.dev/) to install the node modules and get the application started run this command

    npm i && npm start

Will start the default local server, to access the page on the browser visit http://localhost:3000/

### Building the application 📦

    npm run build

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Features 👩‍💻

- The navigation bar gives access to the different sections with a slider with the poster.

- Clicking on the poster to see all available trailers from youtube.

- Search bar to look for a tv shows or movies.

- Responsive view featuring a burger menu clicking on the logo.

## Libraries 📚

- [Axios](https://axios-http.com/docs/intro) because is a library we can use for client and server side.

- [Glider](https://github.com/kevinfarrugia/react-glider) implementing a slider could be time consuming and costumization wasn't a requirement.

    - Sourcemap, glider throws a warning in development environment so I have to disable sourcemap in [.env](.env)

- [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start) for page routing.

- [React-player](https://github.com/CookPete/react-player) to display youtube videos for the trailers 

- [React-burger-menu](https://github.com/negomi/react-burger-menu) to create a burger menu for responsive view

## Improvements, todos, next iterations 🤓

- Home page show another slider with with suggested movies for the user using the endpoints available from API (get recommendations, get similar movies).

- Modal to display more information about the movies. With the requests we are getting rich information about each movie (overview, genre, rating,..) we could render it in a pop up.

- My list page to save your favorite movies and
show related content with these, using the the [API](https://developers.themoviedb.org/4/list/create-list)

- Profile with user information as proof of concept using a local storage instead create a database.
