# 🚚 Truck Booking Management System (Salesforce)

![SFDX](https://img.shields.io/badge/Salesforce-DX-blue?logo=salesforce)
![Apex](https://img.shields.io/badge/Apex-Programming-orange)
![LWC](https://img.shields.io/badge/Lightning%20Web%20Components-LWC-blueviolet?logo=salesforce)
![Platform](https://img.shields.io/badge/Experience%20Cloud-Salesforce-00A1E0?logo=salesforce)

---

A full-fledged **Salesforce Experience Cloud + LWC + Apex** application that allows customers to browse trucks, book them, track orders, and manage payments — built as part of a professional end-to-end Salesforce project.

---

## 📌 **Project Overview**

The **Truck Booking Management System** is a mini-application developed on Salesforce that enables:

- Customers to book trucks based on brand and load capacity  
- Real-time truck availability checking  
- Viewing & managing customer orders  
- Automated validations for weight, payments, and booking data  
- A smooth Experience Cloud portal UI built using LWCs  
- Salesforce backend logic using Apex controllers  

This project demonstrates skills in **LWC**, **Apex**, **SFDX**, **Experience Cloud**, **Data Modeling**, and **Flows**.

---

## 🏗️ **Tech Stack Used**

| Layer | Technology |
|-------|------------|
| Frontend | Lightning Web Components (LWC) |
| Backend | Apex Classes, SOQL |
| Platform | Salesforce CRM, Experience Cloud |
| Storage | Custom Objects (Truck, Truck Booking, Payments, Load) |
| Metadata | Salesforce DX (SFDX) |
| UI | Lightning Components, NavigationMixin |

---

## 📂 **Project Structure**
```bash
TruckBookingProject/
│
├── Docs/
│   ├── Truck Booking Management.pdf
│   ├── Experience Cloud App.pdf
│   └── Truck.pdf
│
├── screenshots/
│   ├── home.png
│   ├── booking.png
│   └── myorders.png
│
└── force-app/main/default/
    ├── classes/
    │   ├── TruckController.cls
    │   ├── TruckController.cls-meta.xml
    │   ├── MyOrder.cls
    │   └── MyOrder.cls-meta.xml
    │
    ├── lwc/
    │   ├── home1/
    │   ├── booking1/
    │   └── myOrder/


---

## ⚙️ **Key Features**

### **🔹 1. Truck Browsing & Brand Selection**
- Users can browse trucks by brand (Tata, Ashok Leyland, Mahindra, etc.)
- Interactive carousel UI using LWC  
- Real-time availability fetched using Apex  

### **🔹 2. Truck Booking Flow**
- Step-by-step flow built in LWC  
- Customer details pulled using `UIRecordApi`  
- Dynamic booking based on selected truck  

### **🔹 3. Customer Order Dashboard**
- Displays customer bookings  
- Shows brand, load, dates, status, payment details  
- Deep linking using NavigationMixin (`recordPage`, `webPage`)  

### **🔹 4. Apex-Powered Backend**
- `TruckController.cls` → Fetch trucks by brand  
- `MyOrder.cls` → Fetch logged-in user’s bookings  
- SOQL optimized & bulk-safe

---

## 🧩 **Main Components**

### **🟦 Apex**
| Class | Purpose |
|-------|---------|
| `TruckController.cls` | Fetch trucks by brand for the booking screen |
| `MyOrder.cls` | Retrieve orders for the customer dashboard |

---

### **🟩 Lightning Web Components**
| LWC Component | Purpose |
|---------------|---------|
| `home1` | Landing page with brand selection + quick actions |
| `booking1` | Complete booking UI + customer details + flow |
| `myOrder` | Customer bookings page with actions (View, Payments, Feedback) |

---

## 🧑‍💻 **Author**

**Aninda Banerjee**  
Salesforce Developer  
Feel free to connect on LinkedIn!

---

## ⭐ **If you like this project, give the repo a star!**  
This helps recruiters notice your work. 🌟

---
