#Workout Tracker
A basic and safe Node.js CRUD web application that allows users to track their exercise. This application allows users to **create**, **view**, **update**, and **delete** workout entries. Each workout stores a **name**, **type**, **duration**, **date**, **intensity**, and **notes**.

The system utilizes ExpressJS for routing, MongoDB Atlas for cloud data storage, EJS for templating, and Bootstrap + custom CSS for styling. The design and layout of the assignment have been completely customized beyond the in-class example

---

##Technology Stack
- **Node.js**
- **Express.js**
- **MongoDB Atlas** with **Mongoose**
- **EJS** templating engine
- **Bootstrap 5.3.3** (via CDN)
- **Custom CSS** (`/public/style.css`)
- **dotenv** (`.env` file used for database credentials)


---

##Application Features

### Full CRUD Functionality
- **Create** new workouts using a form.
- **Read** and view all workouts in a clean list view.
- **Update** existing workouts using an edit form.
- **Delete** workouts, including a **delete confirmation page**.


### Home page
A welcoming landing page that introduces the application and displays a real example of a workout

### Shared Header & Footer
All pages use a consistent navigation header and footer through EJS partials

### Public Workouts Page
Displays a dynamically generated list of all workouts pulled from MongoDB

### Delete Confirmation
Before deletion, users see a dedicated confirmation screen for safety

##Stylesheet Sources
- Bootstrap 5.3.3 loaded via CDN:
https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css

-Custom stylesheet located at:
/public/style.css

-Database credentials securely stored using .env 
