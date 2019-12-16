# Yolo Bucket
YOLO Bucket is a web app for managing your own personal bucket list! YOLO Bucket is the place to keep track of all the number of experiences or achievements you have or accomplish during your lifetime. You only live once after all!

Once signed in, you can add goals to your bucket list. You can update them by altering their title or description, and you can mark them as completed once you've done them.

The list items are stored in the back-end, which is queried whenever you want to view/create/update/delete your bucket list.

## Technologies Used
* Mongoose
* MongoDB
* ExpressJS
* Node.js

We used HTML and Handlebars for the page's structure, along with JavaScript for attaching event listeners, handling events, making API calls and updating the UI.
On the back-end, we used Mongoose and ExpressJS to set up a NoSQL database that is able to CRUD our list items.

 - [Yolo Bucket Deployed Website](https://nancyho629.github.io/yolo-client/)
 - [Yolo Bucket Client Repo](https://github.com/nancyho629/yolo-client)
 - [Yolo Bucket API Repo](https://github.com/nancyho629/yolo-api)
 - [Yolo Buckket API Deployed](https://yoloapi.herokuapp.com/)

 ## Future Features
 - Implement a one to many relationship so users can have many bucketlists and bucketlists can have many items

 ## Process, Planning, Problem-Solving
 The team began with a formal planning session to determine the entity relationship diagram and wireframe. It was agreed upon that the backend API would be coded in a group pair programming session so everyone would have exposure to setting up the model and routes. It also helped us jumpstart with using GitHub as a group to pull the changes into our local repositories.

 Creating the back-end involved setting up and testing each of the following CRUD actions on list items:
  - Create
  - Index
  - Show
  - Update
  - Destroy

After we had this set up, we began divvying up tasks required to build the front-end. Each team member was responsible for creating the functionality for one CRUD action through the front-end.

# Wireframe:
https://imgur.com/gallery/CUDbnLd

# User Stories:
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a bucket list item with a title and description.
- As a signed in user, I would like to update my bucket list item's title and description.
- As a signed in user, I would like to delete my bucket list item.
- As a signed in user, I would like to see all my bucket list items but not other users'.
- As a signed in user, I would like to cross off items to complete them.
