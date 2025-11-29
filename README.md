# AI Model Inventory Manager (Frontend)

**Live Link:** [https://ai-modle-inventory.web.app/](https://ai-modle-inventory.web.app/)

---
[![ai.png](https://i.postimg.cc/8cStgrM9/ai.png)](https://postimg.cc/xJ6KK8s3)
## 🚀 Project Overview

A modern frontend application for managing AI models inventory. Users can add, edit, delete, and purchase AI models. The app features authentication, responsive UI, theme toggling, toast notifications, and image uploads using ImgBB.

---

## 🗂 Folder Structure

```
client/
├── src/
│   ├── components/      # Shared UI Components (Header, Footer, Slider, etc.)
│   ├── context/         # Auth Context (Firebase)
│   ├── pages/           # All Pages (Home, Login, Register, Models, AddModel, etc.)
│   ├── routes/          # ProtectedRoute setup
│   ├── services/        # Axios API & ImgBB upload
│   ├── App.jsx          # Main App with Routing
│   ├── main.jsx         # React DOM Entry
│   └── index.css        # Tailwind setup
├── .env.example
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## ⚙️ Tech Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router
* **Authentication:** Firebase Auth (Email + Google)
* **HTTP Requests:** Axios
* **Notifications:** React Hot Toast
* **Image Upload:** ImgBB

---

## 📌 Features

* ✅ Firebase Authentication (Email + Google)
* ✅ Dynamic Featured Models section (from backend)
* ✅ Full CRUD operations for AI models
* ✅ Purchase functionality (increments purchase count)
* ✅ My Models & My Purchases pages
* ✅ Dark / Light Theme toggle (stored in localStorage)
* ✅ Responsive and modern UI with Tailwind CSS
* ✅ Toast notifications (react-hot-toast)
* ✅ ImgBB image upload integration

---

## 💻 Installation

1. **Clone the repo**

```bash
git clone <repo-url>
cd client
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment setup**

* Rename `.env.example` to `.env` and configure Firebase and ImgBB API keys.

4. **Run the app locally**

```bash
npm run dev
```

---

## 🌟 Notes

* Ensure Firebase project is properly set up for authentication and database.
* ImgBB API key is required for image uploads.
* The frontend is fully compatible with a backend REST API for model management.

---

## 🙏 Thank You!

If you like this project, consider giving it a star on GitHub or sharing it with others who love AI-based web apps!
