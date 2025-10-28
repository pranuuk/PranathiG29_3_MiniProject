Mini Store

A simple React + Vite e-commerce mini project showcasing products and a shopping cart functionality. This project is a small-scale demonstration of front-end development skills using React, React Router, and context for state management.


🚀 Features

Products Page – Displays a list of products available in the store.

Shopping Cart – Add products to the cart and view the selected items.

Dynamic Cart Count – Navbar shows the number of items in the cart in real-time.

React Context – Cart state is managed globally using CartContext.

Routing – Smooth page navigation between Products and Cart using React Router.

Responsive Navbar – Clean navigation with links to Products and Cart pages.


🛠️ Technologies Used

React – Frontend library for building UI components.

Vite – Build tool for faster development.

React Router DOM – Client-side routing for multiple pages.

Context API – State management for the shopping cart.

CSS (Inline & Simple Styling) – Basic styles for layout and design.

📁 Project Structure
mini-store/
├─ src/
│  ├─ components/
│  │  └─ Navbar.jsx
│  ├─ context/
│  │  └─ CartContext.jsx
│  ├─ pages/
│  │  ├─ ProductsPage.jsx
│  │  └─ CartPage.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
├─ vite.config.js
└─ README.md

💻 Getting Started

Clone the repository

git clone https://github.com/yourusername/REPO_NAME.git
cd REPO_NAME


Install dependencies

npm install


Run the app locally

npm run dev


Build for production

npm run build


Deploy to GitHub Pages (optional)

npm run deploy


Make sure your package.json has the correct homepage URL and basename is set in BrowserRouter for GitHub Pages.

🎯 Usage

Open the site.

Browse products on the Products page (default homepage).

Click Add to Cart to add items.

Navigate to the Cart page to view selected items and total count.
