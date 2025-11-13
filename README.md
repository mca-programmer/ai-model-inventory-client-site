# CLIENT — AI Model Inventory Manager (Frontend)

Tech Stack: React + Tailwind CSS + React Router + Firebase Auth + ImgBB + Axios + React Hot Toast


### Live Link: https://ai-modle-inventory.web.app/

## Folder Structure <br>
client/ <br>
│ <br>
├── src/ <br>
│   ├── components/      # Shared UI Components (Header, Footer, Slider, etc.) <br>
│   ├── context/         # Auth Context (Firebase) <br>
│   ├── pages/           # All Pages (Home, Login, Register, Models, AddModel, etc.) <br>
│   ├── routes/          # ProtectedRoute setup <br>
│   ├── services/        # Axios API & ImgBB upload <br>
│   ├── App.jsx          # Main App with Routing <br>
│   ├── main.jsx         # React DOM Entry <br>
│   └── index.css        # Tailwind setup <br>
│ <br>
├── .env.example <br>
├── tailwind.config.js <br>
├── postcss.config.js <br>
├── package.json <br>
└── README.md



### Install dependencies <br>
npm install


### Run locally <br>
npm run dev

Features <br>

✅ Firebase Authentication (Email + Google) <br>
✅ Dynamic Featured Models section (from backend) <br>
✅ CRUD (Create, Read, Update, Delete) operations <br>
✅ Purchase functionality (increment purchase count) <br> 
✅ My Models & My Purchases pages <br>
✅ Dark / Light Theme toggle (saved in localStorage) <br>
✅ Responsive, modern UI with TailwindCSS <br>
✅ Toast notifications (react-hot-toast) <br>
✅ ImgBB image upload integration

---
## Thank You! <br>

If you like this project, consider giving it a star on GitHub or sharing it with others who love AI-based web apps!
