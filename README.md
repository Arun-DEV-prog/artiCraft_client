
#  HobbyHub — Local Hobby Group Network

**Live Demo:** [hobbyhub-1.web.app](https://hobbyhub-1.web.app)

HobbyHub is a modern, user-friendly web application designed to help hobby enthusiasts **discover**, **join**, and **create** local interest-based groups—whether it’s book clubs, painting circles, or hiking crews. The platform empowers users to connect and engage with like-minded individuals in their communities.  
:contentReference[oaicite:1]{index=1}

---

##  Key Features

- **Group Discovery** – Browse and search for local hobby groups by interest, location, or popularity.
- **Create & Manage Groups** – Easily create your own hobby-focused groups, specifying details like description, schedules, and rules.
- **User Authentication** – Secure login via Firebase Authentication (Google and/or email/password).
- **Responsiveness** – Seamless experience across all devices (desktop, tablet, mobile).
- **Smooth UI/UX** – Clean, engaging interfaces with animations, carousels, and interactive components.  
:contentReference[oaicite:2]{index=2}

---

##  Technology Stack

| Layer       | Technologies & Tools                                     |
|-------------|----------------------------------------------------------|
| **Frontend**| React.js, Vite, Tailwind CSS, daisyUI, React Router      |
| **Backend** | Firebase (Auth, Firestore), Node.js, Express.js, MongoDB (if used) |
| **UX/UI**   | SwiperJS, Lottie animations, SweetAlert, Toast notifications |
:contentReference[oaicite:3]{index=3}

---

##  Getting Started

### Prerequisites
- Node.js & npm installed  
- Firebase project setup (for Authentication & Hosting)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/hobbyhub.git
   cd hobbyhub
Install dependencies

bash
Copy
Edit
npm install
Configure Environment Variables
Create a .env file and add your Firebase config details (API key, project ID, auth domain, etc.)

Start the development server

bash
Copy
Edit
npm run dev
The app should now be running at http://localhost:3000 (or similar).

