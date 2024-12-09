# NoteApp Project

## Description
NoteApp is a full-stack application for managing personal notes. Users can create, edit, delete, archive, and categorize their notes. It includes a backend REST API and a frontend Single Page Application (SPA).

## Live Deployment
- **Frontend:** [https://ensolvers-noteapp.netlify.app/](https://ensolvers-noteapp.netlify.app/)
- **Backend:** [https://lopez-dbe4d5-backend.onrender.com/api](https://lopez-dbe4d5-backend.onrender.com/api)

## GitHub Repositories
The project is hosted in two separate GitHub repositories for ease of deployment to cloud platforms:
- **Backend Repository:** [https://github.com/Primo18/Lopez-dbe4d5-backend](https://github.com/Primo18/Lopez-dbe4d5-backend)
- **Frontend Repository:** [https://github.com/Primo18/Lopez-dbe4d5-frontend](https://github.com/Primo18/Lopez-dbe4d5-frontend)

> **Note:** These repositories were separated only to facilitate deployment to the cloud. For submission purposes, both the backend and frontend are expected to be in the same repository under respective folders.

## Default Credentials
For login purposes, use the following default credentials:
- **email:** user@email.com
- **Password:** 123

## Features
### Phase 1:
- Create, edit, and delete notes.
- Archive/unarchive notes.
- View active and archived notes.

### Phase 2:
- Add/remove categories to notes.
- Filter notes by categories (partial functionality).

## Known Issues
- First-time login maybe slow due to the backend server sleeping on Render.
- Adding categories to a note reflects changes only after refreshing the page.

## Prerequisites
To run this project locally, ensure you have the following installed:
- Node.js v22.12.0
- pnpm 9.14.4
- PostgreSQL (for backend if running locally)
- Linux/macOS environment

## Project Structure
The repository is organized as follows:
- **backend/**: Contains the Node.js/Express REST API.
- **frontend/**: Contains the React SPA.

Here's the corrected and formatted version:

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/ensolvers-github-challenges/Lopez-dbe4d5.git
   cd Lopez-dbe4d5
   ```

2. Navigate to the respective folder and execute the setup script:
   - **For the backend:**
     ```bash
     cd backend
     chmod +x setup.sh # Only required if the script lacks execute permissions
     ./setup.sh
     ```

   - **For the frontend:**
     ```bash
     cd frontend
     chmod +x setup.sh # Only required if the script lacks execute permissions
     ./setup.sh
     ```

3. Access the application:
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:3000](http://localhost:3000)

## Technologies Used
### Backend
- Node.js v22.12.0
- Express
- Prisma ORM
- PostgreSQL
- JSON Web Tokens (JWT) for authentication

### Frontend
- React 18
- Vite
- FontAwesome for icons

## API Documentation
The API documentation is included in the Postman collection (`Note App.postman_collection.json`) and supports the following key endpoints:

### Auth
- **POST `/auth/register`**: Register a new user.
- **POST `/auth/login`**: Login a user.

### Notes
- **POST `/notes`**: Create a new note.
- **GET `/notes`**: Retrieve active or archived notes (use query `archived`).
- **PATCH `/notes/:id`**: Edit a note.
- **DELETE `/notes/:id`**: Delete a note.

### Categories
- **POST `/categories`**: Create a new category.
- **GET `/categories`**: List all categories.
- **DELETE `/categories/:id`**: Delete a category.

### Notes-Categories
- **POST `/notes/:id/categories`**: Add categories to a note.
- **DELETE `/notes/:id/categories/:categoryId`**: Remove a category from a note.

## Live Deployment Tools
- Backend: Render
- Database: PostgreSQL on Render
- Frontend: Netlify
