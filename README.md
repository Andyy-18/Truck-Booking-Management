# 🚚 Truck Booking Management System (Salesforce)

![Salesforce](https://img.shields.io/badge/Salesforce-Experience%20Cloud-00A1E0?logo=salesforce)
![Apex](https://img.shields.io/badge/Apex-Backend-orange)
![LWC](https://img.shields.io/badge/LWC-Frontend-blueviolet)
![SFDX](https://img.shields.io/badge/SFDX-Metadata-blue)

---

## 📌 Project Summary

A **real-world Salesforce Experience Cloud application** that allows customers to **browse trucks, book logistics services, track orders, and manage payments**.

This project demonstrates **end-to-end Salesforce development** using **Lightning Web Components, Apex, SOQL, and Experience Cloud**, designed to closely simulate a **production-style logistics booking system**.

---

## 🎯 Business Use Case

Logistics companies require a **self-service customer portal** where users can:
- Browse trucks by brand and load capacity  
- Book trucks with pickup and drop locations  
- Track booking status  
- View invoices and payment details  

This application solves the above using **Salesforce CRM + Experience Cloud**.

---

## 🏗️ Tech Stack Used

| Layer | Technology |
|-----|-----------|
| UI | Lightning Web Components (LWC) |
| Backend | Apex Classes, SOQL |
| Platform | Salesforce Experience Cloud |
| Data | Custom Objects (Truck, Truck Booking, Load, Payment) |
| Metadata | Salesforce DX (SFDX) |
| Navigation | NavigationMixin, UIRecordApi |

---

## 📸 Application Screenshots

### 🏠 Home / Landing Page
*Experience Cloud landing page with brand discovery and quick actions*

![Home](screenshots/home.png)

---

### 🚚 Truck Brand Selection
*Browse trucks by brand (Tata, Mahindra, Ashok Leyland, Eicher)*

![Brands](screenshots/brands.png)

---

### 📋 Truck Listing by Brand
*Dynamic truck listing fetched using Apex controllers*

![Trucks](screenshots/trucks.png)

---

### 📝 Truck Booking Form
*Validated booking form with load, pickup/drop, and payment details*

![Booking](screenshots/booking.png)

---

### ✅ Booking Confirmation
*Successful booking confirmation with navigation to My Orders*

![Success](screenshots/success.png)

---

### 📦 My Orders Dashboard
*Customer dashboard showing bookings, invoices, and payment actions*

![Orders](screenshots/orders.png)

---

## ⚙️ Key Features

### 🔹 Truck Browsing & Selection
- Brand-based truck browsing
- Dynamic data fetched using Apex + SOQL
- Clean, responsive LWC UI

### 🔹 Booking Management
- Step-by-step booking process
- Load validation against truck capacity
- Date, time, and address validations

### 🔹 Customer Orders Dashboard
- Logged-in user specific data
- Booking status, invoice, and payment tracking
- Secure Experience Cloud access

### 🔹 Backend Architecture
- Bulk-safe Apex controllers
- Optimized SOQL queries
- Clear separation of UI and business logic

---

## 🧩 Core Components

### 🟦 Apex Classes
| Class | Responsibility |
|-----|----------------|
| `TruckController.cls` | Fetch trucks by brand and availability |
| `MyOrder.cls` | Retrieve logged-in user’s bookings |

---

### 🟩 Lightning Web Components
| Component | Purpose |
|---------|--------|
| `home1` | Landing page and brand selection |
| `booking1` | Complete truck booking flow |
| `myOrder` | Customer order dashboard |

---

## 🧠 What This Project Demonstrates

✔ Hands-on Experience Cloud development  
✔ Strong LWC and Apex integration  
✔ Real-world Salesforce data modeling  
✔ Secure, user-specific data handling  
✔ End-to-end Salesforce project ownership  

---

## 🧑‍💻 Author

**Aninda Banerjee**  
_Salesforce Developer @ Cognizant (CTS)_  
📍 India  
🔗 LinkedIn → [Aninda Banerjee](https://www.linkedin.com/in/anindabanerjee18)

---

## ⭐ If you like this project, give it a star!
