# Ponytelle

> A modern luxury wig e-commerce experience built with React, Redux Toolkit, React Router, and Tailwind CSS.

Ponytelle is a premium, responsive e-commerce web application designed to simulate the feel of a real luxury beauty brand. 
The project evolved from a simple storefront into a polished frontend application with persistent state, smart search behavior, 
reusable components, and mobile-first interactions.

---

# Preview

## Core Experience

* Browse luxury wig collections
* Search products from anywhere in the app
* Save favorites to a persistent wishlist
* Add products to cart with selected length and color
* Enjoy a responsive mobile-first experience

---

# Features

## Home Page

* Transparent navbar over hero section
* Smooth navbar background transition on scroll
* Featured products section
* Best Seller highlights
* Most Viewed products section
* Fully responsive layout

## Shop Page

* Product grid powered by a reusable `ProductCard`
* Live filtering as the user types
* Product ratings display
* Quick add-to-cart actions
* Hover animations and image zoom

## Global Search

Originally, search only worked on the homepage.

The search system was later upgraded to work globally across the app.

### Improvements

* Centralized search state using Redux Toolkit
* Search suggestions while typing
* Auto-redirect to `/shop` when searching from:
  * Product Details page
  * Cart page
  * Checkout page
* Mobile search overlay

### Result

Users can search from anywhere without needing to return to the homepage.

---

# Wishlist System

## Phase 1: Basic Wishlist

* Added a `wishlistSlice`
* Users can save products they like

## Phase 2: Prevent Duplicate Items

### Problem

The same product could be added multiple times.

### Solution

```js
const exists = state.items.find(
  (item) => item.id === action.payload.id
);

if (!exists) {
  state.items.push(action.payload);
}
```

## Phase 3: LocalStorage Persistence

### Problem

Wishlist items disappeared after refreshing the page.

### Solution

```js
localStorage.setItem("wishlist", JSON.stringify(state.items));
```

The wishlist is loaded from `localStorage` when the app starts.

### Result

Wishlist items remain available even after a refresh.

---

# Interactive Wishlist Heart

The wishlist heart on each product card became a key interaction.

## Final Behavior

* White heart by default
* Red filled heart when saved
* Click again to remove from wishlist
* Automatically updates the wishlist count
* Works on both desktop and mobile

### Problem

Clicking the heart also opened the product details page.

### Cause

The entire product card was wrapped inside a `Link` component.

### Fix

```js
e.preventDefault();
e.stopPropagation();
```

This prevented the click event from bubbling up to the product link.

---

# 🛒 Cart System

Users can add products to their cart with:

* Selected wig length
* Selected wig color
* Quantity management
* Cart totals
* Toast notifications

### Validation

Products cannot be added to the cart unless all required options are selected.

---

# Product Details Page

The Product Details page includes:

* Dynamic product loading using route parameters
* Length selector
* Color selector
* Validation before adding to cart
* Automatic scroll-to-top when navigating between products
* Success toast after adding to cart

---

# Navbar Evolution

The navbar evolved from a simple navigation bar into a smart, dynamic component.

## Added Features

* Transparent navbar on the homepage
* Solid navbar after scrolling
* Wishlist icon with item count
* Cart icon with live badge
* Active link highlighting
* Hamburger menu on mobile
* Mobile search overlay

---

# Bugs Encountered & Solutions

| Problem                                                  | Cause                             | Solution                                       |
| -------------------------------------------------------- | --------------------------------- | ---------------------------------------------- |
| `Cannot read properties of undefined (reading 'length')` | Incorrect state access            | Used optional chaining and correct Redux state |
| Duplicate wishlist items                                 | No existence check before adding  | Used `.find()` before pushing to state         |
| Clicking heart opened product page                       | Event bubbling from parent `Link` | Used `e.stopPropagation()`                     |
| `isActive` not defined                                   | Incorrect `NavLink` usage         | Used function-as-children pattern              |
| Search only worked on homepage                           | Search state stored locally       | Moved search state into Redux                  |
| Wishlist reset on refresh                                | No persistence layer              | Added localStorage sync                        |

---

# Example Fixes

## Safe Wishlist Count

```js
const wishlistCount = useSelector(
  (state) => state.wishlist.items?.length || 0
);
```

## Correct NavLink Usage

```jsx
<NavLink to="/wishlist">
  {({ isActive }) => (
    <div>{isActive ? "Active" : "Inactive"}</div>
  )}
</NavLink>
```

---

# Architecture Decisions

Ponytelle was designed with scalability in mind.

### Key Decisions

* Centralized state management with Redux Toolkit
* Reusable UI through shared components
* Separation between UI and business logic
* Variant-based `ProductCard` design
* Persistent client-side storage
* Mobile-first responsive structure

---

# 📁 Folder Structure

```text
src/
├── components/
│   ├── layout/
│   │   └── Navbar.jsx
│   ├── shared/
│   │   └── ProductCard.jsx
│   └── shop/
│       └── MostViewed.jsx
│
├── features/
│   ├── cart/
│   ├── products/
│   └── wishlist/
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   └── Checkout.jsx
```

---

# 🛠 Tech Stack

* React
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* React Icons
* React Toastify
* LocalStorage

---

# What Ponytelle Represents

Ponytelle is more than an e-commerce project.

It represents:

* Strong frontend architecture
* Real-world debugging experience
* State management skills
* UX-focused thinking
* Reusable component design
* Mobile-first development

---

# 📈 Future Improvements

Planned features for future versions:

* Recently viewed products
* Authentication system
* Backend integration
* Payment gateway integration (Paystack / Stripe)
* Order history
* Admin dashboard
* Inventory management
* Wishlist drawer
* Fly-to-cart animation

---

# ⚙️ Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Move into the project folder
cd ponytelle

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

# Final Thoughts

Ponytelle evolved from a basic storefront into a production-style luxury e-commerce frontend.

Every feature, bug, and improvement contributed to a deeper understanding of:

* React
* Redux Toolkit
* Component architecture
* State persistence
* User experience design

---

Built with intention
Improved through iteration
Designed for luxury
