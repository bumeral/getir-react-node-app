# Getir React and Node code exercise

Simple todo app with adding a new task, drag/drop and delete features for Getir

## Getting Started

Follow the following instructions to get up and running quickly

### 1. Running the api locally

Run the following commands respectively

```
cd server && npm install && node index.js
```

### 2. Running the front end App

Run the following commands respectively

```
cd client && cd todo-app && npm start
```

Open your browser on http://localhost:3000

---

### 3. Development

- Created a simple todo app with drag and drop feature.
- API served under `/server` directory
- Front end is in `/client`
- 
### 4. Coding style

- Eslint & Prettier to enforce coding styles
- Use of hooks are preferred
- Use of react functional components are preferred
- Component names `PascalCase` i.e
- Page components can be found `src/components`.
  - `src/components/TodoList.component.jsx`
- Assests can be found `src/assests`.
  - `src/assets/styles.css`

### 5.Has this has been tested

Manual end to end test has been performed for the time being
- Adding a new task: 
<img width="1236" alt="add_new_todo" src="https://user-images.githubusercontent.com/10267937/168760979-eaa12642-27af-49a8-824e-2414c3a28cb0.png">
<img width="426" alt="new_todo_added_on_awaiting" src="https://user-images.githubusercontent.com/10267937/168761059-8ca3ef53-d313-4098-afff-f3ad7a3cde42.png">

- Drag and Drop feature
<img width="1263" alt="drag_and_drop" src="https://user-images.githubusercontent.com/10267937/168761044-1234ff70-33b8-403b-ae19-934ffb47655f.png">
<img width="1207" alt="new_todo_dragged_completed" src="https://user-images.githubusercontent.com/10267937/168761014-25255a69-4a25-4900-b3ce-126ec831546e.png">

## 6. Deployment

```
cd client && npm run build
```

It builds the app for production to the `build` folder.
After the build is done, copy everything in on the build folder and 

```
cd .. && cd server
```
And paste them in `server/build` directory.

Check if it's deployed properly by running 

```
nodemon index.js
```


The app is served on https://getir-express-react-app.herokuapp.com/

---

## 7. Built With

Back End:
- [Express] (https://expressjs.com/en/starter/installing.html) - Back end web app Framework

Front End: 
- [React](https://reactjs.org/docs/create-a-new-react-app.html) - Web Framework
- [React Hook Form](https://react-hook-form.com/) - Manages Form states and Validation
- [React Redux](https://www.npmjs.com/package/react-redux) - State Management

Infra: 

- [Mongo DB] - https://www.mongodb.com
- [Heroku] - https://www.heroku.com

### Who to contact

- **Arya Mia Meral** - _Initial setup_ - [aryaameral@gmail.com](aryaameral@gmail.com])
