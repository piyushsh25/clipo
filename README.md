# Clipo

Clipo is a video library app with mock backend. A user can login/logout and signup to a profile, like/dislike a video. Add/ remove from bookmark. Create playlist and add videos to them. Filter video according to categories. Track video history etc.


Tech Stack: ReactJS, contextAPI.

## Installation

* First clone the Repo.
* ```cd folder```.
* ``` npm install ``` to install node_modules and package-lock.json
* ```npm start``` to start the server. 

## App Components
* HomePage.
* Login/Signup Page.
* Watch later.
* Video Page.
* History Page.
* Liked Videos.
* Playlist Page.

### Home Page
This page fetches videos databse. If the user is logged in. The user can view their likes,video actions etc..


Home Page:
![Home Page](./screenshots/Screenshot%202022-09-26%20110806.png)


### Login/Signup
The user can login to their existing accout or create a new account. A unique JWT token is generated and stored in the local storage. Any API requests (like,comment,delete etcc...) is done through the JWT token stored in local storage. 


Login :


![Login](./screenshots/Screenshot%20(267).png)

Signup: 


![Signup](./screenshots/Screenshot%20(268).png)


### Watch Later.

A user can add any video to watch later. 

Bookmarks: 
![Bookmark Page](./screenshots/Screenshot%20(266).png)

### Video Page.
A user can watch the video in this page 

Video Page:

![Video Page](./screenshots/Screenshot%20(264).png)

### History Page.

The watch history of the user is tracked and is rendered in this page.

History page  :

![History page ](./screenshots/Screenshot%20(2).png)


### Liked Page.

A user can like a video from the video page. 

Liked Page :

![Liked Page ](./screenshots/Screenshot%20(3).png)

### Playlist Page.

This page has a list of playlist created and by the used and videos inside the induvidual playlist.

Playlist Page :  

![Playlist Page](./screenshots/Screenshot%20(4).png)
![Playlist Page](./screenshots/Screenshot%20(5).png)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
