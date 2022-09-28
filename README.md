# [Clipo](https://clipo.netlify.app/)

Clipo is a video library app with mock backend. A user can login/logout and signup to a profile, like/dislike a video. Add/ remove from bookmark. Create playlist and add videos to them. Filter video according to categories. Track video history etc.


Tech Stack: ReactJS, contextAPI.


Login as guest:

id: admin@clipo.com


password: clipo


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
This page renders available videos from database. If the user is logged in. The user can view their likes,video actions as well.

This is the landing page, where all the videos are displayed, we can sort the video accroding to category, and access all the different pages.
Login is not required to watch video.
We can save, add to playlist the video, if already logged, otherwise the user is re-directed to login page.

Home Page:

![Home Page](./screenshots/Screenshot%202022-09-26%20110806.png)


### Login/Signup

The user can login to their existing accout or create a new account. A unique JWT token is generated and stored in the local storage. Any API requests (like,comment,delete etcc...) is done through the JWT token stored in local storage. 


Login :


![Login](./screenshots/Screenshot%20(267).png)

Signup: 


![Signup](./screenshots/Screenshot%20(268).png)


### Watch Later.

A user can add any video to watch later and remove it as well. User can clear the watch later at once as well.
If the user is not logged in, a modal will popup asking the user to login.


Watch later: 
![Bookmark Page](./screenshots/Screenshot%20(6).png)

### Video Page.
A user can watch the video in this page. Like, dislike, save for later and add to playlist.
If the user is not logged in, a modal will popup asking the user to login
Video Page:

![Video Page](./screenshots/Screenshot%20(7).png)

### History Page.

The watch history of the user is tracked and is rendered in this page.[considering the user has logged in]
If the user tries accessing this route and the user is not logged in, a modal will popup asking the user to login
History page  :

![History page ](./screenshots/Screenshot%20(2).png)


### Liked Page.

A user can like a check liked video from this page.[considering the user has logged in] 
If the user tries accessing this route and the user is not logged in, a modal will popup asking the user to login.

Liked Page :

![Liked Page ](./screenshots/Screenshot%20(3).png)

### Playlist Page.

This page has a list of playlist created by the user. The user can add video(s) by selecting add to playlist from the call-to-action button in videos.  
If the user tries accessing this function and the user is not logged in, a modal will popup asking the user to login.


Playlist Page :  

![Playlist Page](./screenshots/Screenshot%20(4).png)
![Playlist Page](./screenshots/Screenshot%20(5).png)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
