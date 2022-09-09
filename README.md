# Habit Tracker App with React and Flask

This is a simple habit tracker app built with React and Flask. It uses a PostgreSQL database (SQLite) to store the data.

## Installation

### Frontend

1. cd into the frontend directory `cd habit_tracker_client`
2. Install the dependencies `npm install`
3. Start the app client with `npm start` to start the app at `http://localhost:3000`

### Backend

1. cd into the backend directory `cd habit_tracker_server`
2. start a virtual environment using pipenv `pipenv shell`
3. Install the dependencies `pipenv install`
4. Start the app server with `pipenv run dev` to start the server at `http://localhost:5000`

## Usage

1. Create a new habit by clicking the `+` button
2. Click on the **completed** to mark it as completed and move it to the completed section. This also marks the habit as completed in the database.
3. Click on the delete button "**x**" to delete the habit and remove the habit from the database.
