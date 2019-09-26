Team members: Martin, Elina, Nancy, Lance

YOLO Buckets is a web app for managing your own personal bucket list! Once signed in, you can add goals to your bucket list. You can update them by altering their title or description, and you can mark them as completed once you've done them.

The list items are stored in the back-end, which is queried whenever you want to view/create/update/delete your bucket list.

We used HTML and Handlebars for the page's structure, along with JavaScript for attaching event listeners, handling events, making API calls and updating the UI.
On the back-end, we used Mongoose and Express to set up a NoSQL database that is able to CRUD our list items.

 Our back-end repo: https://github.com/Team-ELMN/yolo-api

 A link to both deployed sites

 List unsolved problems which would be fixed in future iterations.

 Document your planning, process and problem-solving strategy
 We began with the back-end, which we built together as a group. This involved setting up and testing each of the following CRUD actions on list items:
  - Create
  - Index
  - Show
  - Update
  - Destroy
After we had this set up, we began divvying up tasks required to build the front-end. Each team member was responsible for creating the functionality for one CRUD action through the front-end.

Link to wireframes

  User Stories:
As an unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As a signed in user, I would like to create a bucket list item with a title and description.
As a signed in user, I would like to update my bucket list item's title and description.
As a signed in user, I would like to delete my bucket list item.
As a signed in user, I would like to see all my bucket list items but not other users'.
As a signed in user, I would like to cross off items to complete them.
