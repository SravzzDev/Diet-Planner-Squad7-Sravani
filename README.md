# Diet-Planner-Squad7-Sravani


# **Personalized Diet Planner 🍏**

A web application that generates a **personalized diet plan** based on the user's **Body Mass Index (BMI)** and health goals. This solution helps users understand their nutritional needs and suggests meal plans accordingly. The app includes **user authentication**, **profile setup**, and a **dashboard** for tracking progress. 🥗

---

## **Key Features ✨**

* **User Registration and Profile Setup** 📝:

  * Collect user details such as **age**, **gender**, **height**, **weight**, **activity level**, and **dietary preferences** (e.g., vegetarian, vegan).
  * Set **health goals** (e.g., weight loss, weight gain, or maintenance).

* **BMI Calculator** 📊:

  * Calculate **BMI** and categorize it (**Underweight**, **Normal**, **Overweight**, **Obese**).
  * Display **health recommendations** based on BMI.

* **Personalized Diet Plan Generator** 🍽️:

  * Generate a daily/weekly diet plan with **meal suggestions** for breakfast, lunch, dinner, and snacks.
  * Nutritional breakdown of each meal (calories, protein, carbs, and fats).

* **Nutritional Information** 🥑:

  * Display detailed **calories**, **proteins**, **carbs**, and **fats** per meal.

* **User Dashboard** 📅:

  * View, track, and update your **diet plan** and **personal metrics** over time.



## **Tech Stack 💻**

### **Frontend**:

* **React** (with **TypeScript**) for fast and maintainable development.
* **Tailwind CSS** for styling and responsive design.
* **Formik** for handling forms and **Yup** for validation.
* **Redux Toolkit** for state management.
* **Axios** for API calls, and **SWR** for data fetching.
* **JWT** for secure user authentication.
* **Code Splitting** for improved performance.

### **Backend**:

* **Node.js** with **Express** and **TypeScript** for building a fast and scalable backend.
* **MongoDB** and **Mongoose** for database management.
* **JWT** for secure user authentication and **Bcrypt** for password hashing.
* **Express Validator** for input validation.
* **Morgan** for logging HTTP requests.
* **Helmet** for HTTP headers security.
* **Rate Limiter** to prevent abuse and DDoS attacks.
* **Global Error Handling** middleware.

---

## **How to Run the Application 🏃‍♀️**

### **Frontend Setup**:

1. Clone this repository and navigate to the `frontend` directory.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the development server:

   ```bash
   npm run dev
   ```

### **Backend Setup**:

1. Clone this repository and navigate to the `backend` directory.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file with the following environment variables:

   ```bash
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Run the backend server:

   ```bash
   npm run dev
   ```

---

## **API Endpoints 🛠️**

### **User Authentication** 🔐:

* `POST /api/auth/register` – Register a new user with profile details.
* `POST /api/auth/login` – Login and return a JWT token.

### **Profile Setup** 📝:

* `GET /api/user/profile` – Retrieve the user's profile data.
* `PUT /api/user/profile` – Update the user's profile (age, height, weight, etc.).

### **BMI Calculation** 📊:

* `POST /api/bmi/calculate` – Calculate BMI based on user height and weight.

### **Diet Plan Generation** 🍽️:

* `POST /api/diet/plan` – Generate a personalized diet plan based on BMI and health goals.

---

## **Security Considerations 🔒**

* **JWT Authentication**: Tokens are stored in **HTTP-only cookies** to mitigate XSS attacks.
* **Password Hashing**: User passwords are securely hashed using **bcrypt**.
* **Helmet**: Adds secure HTTP headers to protect against common vulnerabilities.
* **Rate Limiting**: Prevents brute-force and DDoS attacks.
* **CORS**: Configured to allow requests only from trusted domains.

---



## **Acknowledgements 🙏**

* Thanks to all the open-source contributors and libraries that made this project possible!
* Special thanks to **Tailwind CSS**, **Formik**, and **React** for making frontend development enjoyable.

---

## **Conclusion 🎯**

The **Personalized Diet Planner** offers a comprehensive solution to help users meet their health goals, whether it’s weight loss, maintenance, or gain. This application is designed to be intuitive, secure, and user-friendly, providing tailored meal plans and tracking capabilities to ensure that users stay on track with their nutrition goals.

