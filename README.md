# 🚚 Truck Booking Management System (Salesforce)

![Salesforce](https://img.shields.io/badge/Salesforce-Experience%20Cloud-00A1E0?logo=salesforce)
![Apex](https://img.shields.io/badge/Apex-Backend-orange)
![LWC](https://img.shields.io/badge/LWC-Frontend-blueviolet)
![SFDX](https://img.shields.io/badge/SFDX-Metadata-blue)

## 🎬 Application Demo

The following demo showcases the **complete end-to-end flow** of the application, including truck selection, booking, confirmation, and order tracking.
![Demo](TruckBookingProject/screenshots/TruckBooking.gif)

📸 For step-by-step screenshots of each booking stage, please refer to the **[screenshots folder](TruckBookingProject/screenshots/)**.

---

## 📌 Project Summary

A **real-world Salesforce Experience Cloud application** that enables customers to **browse trucks, book logistics services, track orders, and manage payments** through a secure self-service portal.

This project demonstrates **both Salesforce Admin and Developer capabilities**, built using **Lightning Web Components, Apex, SOQL, Flows, Validation Rules, Reports, and Dashboards**, closely simulating a **production-grade logistics booking system**.

From a **Salesforce Admin perspective**, the project includes:
- **Data security implementation** using Profiles, Permission Sets, Object & Field-Level Security  
- **Validation Rules** to enforce business constraints (load limits, mandatory booking details, payment checks)  
- **Record-triggered and Screen Flows** for automation and guided user processes  
- **Custom Reports and Dashboards** for tracking bookings, deliveries, and payment status  

From a **Salesforce Developer perspective**, the project showcases:
- **Lightning Web Components (LWC)** for responsive, component-based UI  
- **Apex controllers** for business logic and data retrieval  
- **Optimized SOQL queries** with user-context security  
- **Experience Cloud integration** for customer-facing functionality  

Overall, this project reflects **end-to-end Salesforce CRM development**, covering **data modeling, security, automation, UI, and analytics** in a single integrated solution.


---
---

## 📘 Project Documentation

For a detailed, step-by-step understanding of the application setup, configuration, and implementation, please refer to the documents below:

📄 **Experience Cloud App Documentation**  
👉 [Experience Cloud App](TruckBookingProject/Docs/Experience%20Cloud%20App.pdf)  
*Covers Experience Cloud portal structure and user access.*

📄 **Truck Booking Management – Functional Flow**  
👉 [Truck Booking Management Project](TruckBookingProject/Docs/TRUCK%20BOOKING%20MANAGEMENT%20PROJECT.pdf)  
*Explains end-to-end booking flow, validations, automation, and business logic.*

📄 **Lightning Web Components (LWC) Code Walkthrough**  
👉 [LWC Code Documentation](TruckBookingProject/Docs/Truck.pdf)  
*Provides a detailed explanation of all LWC components used in the project, including component structure, JavaScript logic, Apex integration, and UI behavior.*

These documents are recommended for reviewers who want **clear insight into admin configurations, automation logic, and development flow**.

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

## 📂 Project Structure

```bash
TruckBookingProject/
│
├── Docs/
│   ├── Experience Cloud App.pdf
│   ├── TRUCK BOOKING MANAGEMENT PROJECT.pdf
│   └── Truck.pdf
│
├── screenshots/
│   ├── home.png
│   ├── brands.png
│   ├── trucks.png
│   ├── booking.png
│   ├── success.png
│   ├── orders.png
│   └── Experience Cloud App.pdf
│
└── force-app/main/default/
    ├── classes/
    │   ├── TruckController.cls
    │   ├── TruckController.cls-meta.xml
    │   ├── MyOrder.cls
    │   └── MyOrder.cls-meta.xml
    │
    └── lwc/
        ├── home1/
        ├── booking1/
        └── myOrder/
```

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
🔗 LinkedIn → [Aninda Banerjee](https://www.linkedin.com/in/anindabanerjee18) *(opens external link)*
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Aninda%20Banerjee-blue?logo=linkedin)](https://www.linkedin.com/in/anindabanerjee18)


---

## ⭐ If you like this project, give it a star!
