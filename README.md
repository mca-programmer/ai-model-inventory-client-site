# CLIENT — AI Model Inventory Manager (Frontend)

Tech Stack: React + Tailwind CSS + React Router + Firebase Auth + ImgBB + Axios + React Hot Toast


### Live Link: https://ai-modle-inventory.web.app/

 Folder Structure <br>
client/ <br>
│ <br>
├── src/ <br>
│   ├── components/      # Shared UI Components (Header, Footer, Slider, etc.) <br>
│   ├── context/         # Auth Context (Firebase)
│   ├── pages/           # All Pages (Home, Login, Register, Models, AddModel, etc.)
│   ├── routes/          # ProtectedRoute setup
│   ├── services/        # Axios API & ImgBB upload
│   ├── App.jsx          # Main App with Routing
│   ├── main.jsx         # React DOM Entry
│   └── index.css        # Tailwind setup
│
├── .env.example
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md


## Install dependencies
npm install


## Run locally
npm run dev

✨ Features

✅ Firebase Authentication (Email + Google)
✅ Dynamic Featured Models section (from backend)
✅ CRUD (Create, Read, Update, Delete) operations
✅ Purchase functionality (increment purchase count)
✅ My Models & My Purchases pages
✅ Dark / Light Theme toggle (saved in localStorage)
✅ Responsive, modern UI with TailwindCSS
✅ Toast notifications (react-hot-toast)
✅ ImgBB image upload integration

---
## Thank You! <br>

If you like this project, consider giving it a ⭐ on GitHub or sharing it with others who love AI-based web apps!
