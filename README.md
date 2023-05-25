# BlogWebsite-Daily-Journal

The Daily Journal is a simple blog website built using Node.js, Express.js, EJS (Embedded JavaScript), and MongoDB. It allows users to create new posts, read existing posts, and delete posts. The website has the following main pages: Home, Compose, About Us, and Contact Us.

## Installation
To run the Daily Journal website locally, follow these steps:

1. Ensure you have Node.js installed on your machine.
2. Clone the project repository from GitHub or download the source code.
3. Open a terminal or command prompt and navigate to the project directory.
4. Run the command **npm install** to install the required dependencies listed in the **package.json** file.

## Dependencies
The Daily Journal website relies on the following dependencies:

* **express**: A fast and minimalist web framework for Node.js.
* **body-parser**: Middleware to parse the request body.
* **ejs**: A template engine for generating dynamic HTML pages.
* **mongoose**: An object data modeling (ODM) library for MongoDB.
* **method-override**: Middleware to override HTTP methods.

## File Structure
The project has the following file structure:

* **header.ejs**: The header partial view that contains the navigation menu.
* **footer.ejs**: The footer partial view that displays the website footer.
* **app.js**: The main server file containing the application logic.
* **package.json**: The file that lists the project details and dependencies.

## Running the Server

To start the server and run the Daily Journal website, use the following command:
```
mongod
node app.js
```
The server will start on port 3000, and you can access the website in your browser by visiting http://localhost:3000.

## Routes
The Daily Journal website defines the following routes:

* `GET "/"`: Renders the home page with the list of posts.
* `GET "/compose"`: Renders the compose page to create a new post.
* `POST "/compose"`: Handles the form submission from the compose page to save a new post.
* `DELETE "/posts/:postId"`: Deletes a post based on the provided postId.
* `GET "/posts/:postId"`: Renders a specific post based on the provided postId.
* `GET "/about"`: Renders the about us page.
* `GET "/contact"`: Renders the contact us page.

## Views
The website uses EJS templates for rendering dynamic HTML views. The views are located in the `views/` directory and have the following structure:

* `home.ejs`: Renders the home page, displaying the list of posts.
* `compose.ejs`: Renders the compose page to create a new post.
* `post.ejs`: Renders a specific post with its title and content.
* `about.ejs`: Renders the about us page.
* `contact.ejs`: Renders the contact us page.

## Database

The website uses MongoDB as the database to store the blog posts. It utilizes Mongoose, an ODM library, to interact with the database. The posts are stored in the blogDB database on the local MongoDB server (mongodb://127.0.0.1:27017/blogDB).

The Post model is defined using Mongoose and has two properties: title and content. Each post is an instance of the Post model.

## Customization

To customize the website, you can modify the following parts of the code:

* `header.ejs`: Edit the navigation menu items and their corresponding URLs.
* `footer.ejs`: Modify the content of the footer.
* `app.js`: Update the initial content for the home page (homeStartingContent), about us page (aboutContent), and contact us page (contactContent).
* `public/css/styles.css`: Customize the CSS styles for the website.


## Conclusion
The Daily Journal is a simple blog website that allows users to create and manage posts. It demonstrates the use of Node.js, Express.js, EJS, and MongoDB to build a dynamic web application. Feel free to explore and enhance the code to add more features and functionality to the website.

## Output

https://github.com/akhilathuluri/BlogWebsite-Daily-Journal/assets/89147384/da49f1ff-c9b9-433d-b5b1-fcfd1ae5b4da

