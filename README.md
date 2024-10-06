# Job Portal Project

## 🚀 Live Demo

[Click here to view the live site](https://jobportal-frontend-z8ux.onrender.com/)

---

## 📖 Project Overview

The **Job Portal** is a web application where users can find jobs, apply for positions, and manage their applications. Employers can post job listings, review candidates, and manage the hiring process. The portal aims to streamline the job-seeking and hiring experience for both candidates and employers.

---

## 🎯 Features

- **Job Seekers:**
  - Browse and search for jobs by category, location, and skill set.
  - Apply for jobs, track application status, and update your profile.
  - Get personalized job recommendations.

- **Employers:**
  - Post job listings with detailed descriptions and requirements.
  - Review candidate applications and manage hiring workflow.
  - View analytics on job post performance.

- **Admin:**
  - Manage all users (job seekers and employers) from a single dashboard.
  - View detailed reports on job applications and site usage.

---

## 🛠️ Tech Stack

- **Frontend:**
  - React.js
  - Redux for state management
  - Tailwind CSS for UI styling
  - Vite for development/build tooling

- **Backend:**
  - Node.js & Express.js
  - MongoDB with Mongoose for database management
  - JWT for authentication
  - Cloudinary for file uploads (profile pictures, resumes)

- **Deployment:**
  - Hosted on [Netlify/Vercel] for frontend
  - Backend deployed on [Heroku/Render]  
  *(Replace with actual deployment services used)*

---

## 📸 Screenshots

### 1. Home Page
![Home Page](https://res.cloudinary.com/djusmuols/image/upload/Screenshot_2024-10-06_at_3.46.09_PM_khfwv8.png)  


### 2. Job Listings Page
![Job Listings](https://res.cloudinary.com/djusmuols/image/upload/Screenshot_2024-10-06_at_3.50.53_PM_mukx1e.png)  


### 3. Application Tracking Dashboard
![Application Tracking](https://res.cloudinary.com/djusmuols/image/upload/Screenshot_2024-10-06_at_3.52.13_PM_wwfnzz.png)  


---

## 🧑‍💻 Installation and Setup

To run this project locally, follow these steps:

### Prerequisites:
- Node.js installed
- MongoDB installed and running

### Clone the repository:
```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal

#Install dependencies:
```bash
Backend:
cd backend
npm install
```bash
Frontend:
cd frontend
npm install
```bash
Environment Variables:
Create a .env file in the backend directory and configure it with the following:

```bash
.env
Copy code
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
Running the Project:
```bash
Backend:
Copy code
cd backend
npm run dev
Frontend:
bash
Copy code
cd frontend
npm start
The project will now be running at http://localhost:3000.
```bash
🤝 Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue to discuss what you would like to change.

📧 Contact
For any inquiries, reach out at: arshsomal100@gmail.com
