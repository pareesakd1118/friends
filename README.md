<p align="center">Friends App ~?? hours</p>
<p align='center'>👆<b>Click the heading to visit the deploy link</b>👆</p> <p align="center">The Friends App is a social network for keeping track of your favorite people all in one place. The idea behind this project came from the challenge of managing contact details, important memories, and notes about friends across various platforms. Instead of having everything scattered between social media sites, messaging apps, and notes, the Friends App consolidates all the information about the people you care about, making it easier to keep in touch and build stronger relationships.</p>
<p align="center">Contributors</p>
<div align="center"> Pareesa Kamgar-Dayhoff: https://github.com/pareesakd1118 </div> <p align="center">Technologies Used</p> <div align="center"> <code><img width="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></code> <code><img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code> <code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="Ruby" title="Ruby"/></code> <code><img width="50" src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png" alt="Rails" title="Rails"/></code> <code><img width="50" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git"/></code> <code><img width="50" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub"/></code> </div>
Installation Instructions:
Run the following commands to clone the repository and start the application locally:
scss
Copy code
git clone git@github.com:pareesakd1118/friends.git
cd friends
bundle install
rails db:create db:migrate
rails server
Run Tests
Ensure you have the app running locally (see Installation Instructions above).
To run the tests, use:
bash
Copy code
rails test
Future Features/Improvements
User authentication with OAuth2.0 to streamline login.
Adding reminder notifications to help users keep track of important dates.
Allow users to upload profile pictures for their friends.
Implementing a calendar feature for events and birthdays.
Enhanced search and filtering options to manage a growing list of friends.
Support for importing contacts from other platforms.
Transitioning to a Progressive Web App (PWA) for offline capabilities.
Context:
<!-- wins, challenges, time spent, goals, approaches, etc -->
Wins
Successfully implemented a multi-user system for managing friend lists.
Gained a deeper understanding of Rails and MVC structure.
Integrated CRUD functionality for managing friends' information.
Challenges
Setting up user authentication and permissions for accessing different features.
Designing a simple but effective user interface to view and manage contacts.
Handling relationships between users and ensuring only the correct users can access/edit specific records.

