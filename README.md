# ToDoApp

ToDoApp is a to-do-list productivity app where the user enters scheduled activities to make everyday life easier. The app is good for easily structuring and getting a good overview of the day's activities. ToDoApp is useful for the users because they can easily add an activity and remove one.

## Existing features

- __Header__
- The app has a header just above the text box. The header text asks the user "What's on the schedule today?". The large letters and sharp colors make it easy to see and read the text.

![Header](https://github.com/matgus217/To-Do-App/assets/147818054/5418bef3-1cd3-4ad4-a7e3-ba9c32f8a721)


- Below the header text there is another text "Type your scheduled items here" the user finds out where to enter their activities.
- The informational text is simple for everyone to understand.

![nformational text](https://github.com/matgus217/To-Do-App/assets/147818054/f6a084f8-a853-4105-a2d1-72f63a88b11e)


- __Adding a ToDo__
- The app is built so that there are already two activities entered "Workout" and "Cook food". They are easy to remove, just press the red button. Once the user has done that, he can easily add his own activities.

![Adding](https://github.com/matgus217/To-Do-App/assets/147818054/8be6c3fa-a9c2-4c15-b04c-ced46c784239)


- When the user has removed the built-in activities, the app looks like this. Then users can start entering their own activities.

![Adding](https://github.com/matgus217/To-Do-App/assets/147818054/933bce2d-884d-4bf8-b317-3e85042b977a)


- The user types their activity in the empty text box and then clicks the green button to add the activity.

![Adding](https://github.com/matgus217/To-Do-App/assets/147818054/93729b53-9f64-4239-af50-513a1af58738)


- If the user wants to delete the activity in the middle, the one at the bottom will be added after the first activity. 
It also works the same way if the user wants to delete the first or last activity

![Adding](https://github.com/matgus217/To-Do-App/assets/147818054/f14b9aa2-188b-4f57-8217-57d7d47c8d80)


## Desing

- __Typography__
- Arial, Helvetica, sans-serif for the entire app.

- __Colour__
- I have used colors that match and colors that are easy for the eye to catch.
- I have worked with Red, Green, White, Purple and Black.

## Testing

- I have tested the app on different devices. My sister has also tried it on her mobile device.
- The app always works.

### Testing code via terminal and npm test

- I have tested the app with npm test in the terminal. 

- __ToDo.test.js__

- Renders without crashing
- Renders two default todo items
- Has an input field
- Has an add button
- Adding items - When the add button is pressed, if the input field is empty, prevent item from being added
- When the add button is pressed, if the input field has text, it creates a new todo item
- Deleting items - When the delete button is pressed for the first todo item, it removes the entire item
- Means that because the first toDoItem was deleted, the first toDoItem should now be cook food

- __ToDoItem.test.js__

- Renders without crashing
- Renders the text from the prop
- Renders a delete button

![Test](https://github.com/matgus217/To-Do-App/assets/147818054/56c4a063-c74b-4b94-b04a-fdae179ae352)

### Lighthouse

- I used Lighthouse within the Chrome Developer Tools to test performance, accesibility, best practices and SEO of the website for both desktop and mobile.

- On mobile device:

![Lighthouse](https://github.com/matgus217/To-Do-App/assets/147818054/5a78bce1-985c-4dc1-b987-1959495e446b)

- On desktop device:


![Lighthouse](https://github.com/matgus217/To-Do-App/assets/147818054/073ce7d5-c148-42ab-b701-3f45ee1c17c2)

### How does it look on different screen sizes?

#### Mobile

![Mobile](https://github.com/matgus217/To-Do-App/assets/147818054/a7e01fd4-06a3-492a-800f-e5323b4935e5)

#### Tablet

![Tablet](https://github.com/matgus217/To-Do-App/assets/147818054/f1cae565-3f7e-4e99-9aea-147a63d42976)

#### Laptop 

![Laptop](https://github.com/matgus217/To-Do-App/assets/147818054/cc7a3ebc-8c5c-4c60-8d55-d130f63dd8b1)


### Bugs

- There are no bugs.


## Deployment

### Heroku

- The steps i followed for deployment:
  I cloned the repository.
  I created a new app.
  I linked the Heroku app to the repository.
  I clicked on deploy.

The live link can be found here - <https://do-todo-app-0a70b062e961.herokuapp.com/>


### Content

- I used the teaching materials from [Code Institute](https://codeinstitute.net/se/)
- I searched the internet and found Create ToDo App using ReactJS for beginners.[GeeksForGeeks](https://www.geeksforgeeks.org/create-todo-app-using-reactjs/)