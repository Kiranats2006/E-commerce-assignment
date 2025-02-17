# E-commerce-Website






## Milestone-1

* **Project overview**:  
1. Authentication: Login Logout Signup
2. Product page: All the products
3. Orders Page: show orders for each user.
4. Payment Gateway

## milestone-2
### Project Setup:
- Set up a React app for the frontend and configured the basic structure for the application.
- Set up the Tailwind CSS framework to style the application efficiently using utility classes.
- Organized the project into **frontend** and **backend** folders (currently backend is set up, but not fully integrated).

### Login Page:
- Created the **Login Page** with **Email** and **Password** input fields.
- Added **Forgot Password?** and **New User? Sign Up** links for additional functionality.

## **Milestone 3**

### **Project Overview**  
1. **Backend Setup**:  
   - Set up a Node.js server using Express.  
   - Connected the server to MongoDB for data storage.

2. **Folder Structure**:  
   - Organized the backend into folders: `controllers`, `models`, `routes`, `middlewares`, and `utils`.

3. **Error Handling**:  
   - Implemented basic error handling to manage server errors and provide better debugging messages.

## **Milestone 4**
1. **Create a User Model**:
   - Design a blueprint for how user data (e.g., name, email, password) is stored in the database.
   - Understand and implement schemas in MongoDB.

2. **Build a User Controller**:
   - Manage user-related actions like adding new users or retrieving their information.
   - Learn how controllers act as the "managers" of your backend.

3. **Enable File Uploads with Multer**:
   - Configure Multer to accept and store files uploaded by users (like profile pictures).
   - Use Multer to handle file storage efficiently.

## **Milestone 5**

1. **Create a Sign-Up Page**:
   - Build a user-friendly UI with **Name**, **Email**, and **Password** fields.
   - Style the form using **Tailwind CSS** for a clean design.

2. **Add Form Validation**:
   - Validate **email** format and **password** strength (e.g., minimum length).
   - Display error messages for invalid inputs.


## **Milestone 7**
- Hash Password: Use bcrypt to hash the password during signup.
- Store Hashed Password: Save the hashed password in the database.
- Login Endpoint: Accept email/username and password.
- Fetch User: Retrieve user by email/username.
- Validate Password: Compare the entered password with the hashed one using bcrypt.compare(). If they match, authenticate the user; otherwise, return an error.

## **Milestone 8**
- Create the card component with props.
- Design the homepage layout using grid or flexbox.

---

  
## Milestone 9  
 
- Created a form to add products, allowing multiple product images as input.  
- Encouraged experimentation with additional features such as:  
  - Adding admin access to restrict product uploads.  
  - Creating shop profiles to allow only shop users to upload products.  

---

## Milestone 10  

1. **Product Schema**:  
   - Defined the structure of product data with proper validations.  
2. **Endpoint Creation**:  
   - Built a POST endpoint to receive product data and store it in MongoDB.  
   - Validated data to maintain database integrity.  

---

## Milestone 11  

1. Wrote an endpoint to send all product data to the frontend.  
2. Created a frontend function to fetch the data.  
3. Dynamically displayed the data using the product card component.  

---

## Milestone 12  
 
1. Wrote an endpoint to filter products by user email.  
2. Created a frontend function to fetch the filtered data.  
3. Dynamically displayed the filtered data using the product card component.  

## Milestone 13 (Updation)

Backend: PUT route for updateing
Frontend: Page for auto filling the updated data [id] except images fetch data from backend and once we have data in frontend we fill the input boxes with that data

---
## milestone 14

DELETE route in the backend
Delete button at the frontend

--- 

## MileStone 15

Added Navbar component (Mobile Responsive with Drop Down)

---

## MileStone 16
Added Single Page product Details
Created Image Modal Component

---

## Milestone-17 
 
1. **Edit User Schema**  
   - Modified the schema to include a cart field for storing product details such as `productId`, `quantity`, and `price`.  

2. **Cart API Endpoint**  
   - Created an endpoint to handle adding products to the cart. Example:  
  
3. **Fetch Single Product Details**  
   - Used `axios` in the frontend to fetch single product data dynamically based on the product ID:  
     ```jsx
     useEffect(() => {
       const getProductSingleDetails = async () => {
         const response = await axios.get(
           `http://localhost:8080/product/get-single/${id}`
         );
         setProduct(response.data.data);
       };
       getProductSingleDetails();
     }, [id]);
     ```  

## Milestone 18
- endpoint to receive request from cart page.
- backend endpoint to fetch all the products inside cart with user mail.

## Milestone 19
- Added Cart UI
- Fetched Cart Details of the User

## milestone 20
- Added UI for profile route
- ceated route for user data

## Milestone-21
- created address form frontend page.
- Created a state that will store input address.

## Milestone-22
- when we click on add address in profile it navigates to the address form page.
- created an endpoint that will receive the address from address form in frontend
- Added the address to the address array inside user collection.


## Milestone 23:
### 1. **Created Checkout Button on Cart Page**:
- Added a **Checkout** button inside the cart page.
- Implemented functionality to navigate to the **Select Address** page when the button is clicked.

### 2. **Created Select Address Page**:
- Created the **Select Address** page to display all the available addresses of the user.

### 3. **Developed Backend Endpoint for Address Retrieval**:
- Created a backend route to fetch and return all the addresses associated with the user.

## Milestone 24:
### 1. **Displayed All Ordered Products**:
- Implemented functionality to display all the products that the user is ordering.
- Ensured that each product is shown with its details in the order summary.

### 2. **Displayed Selected Delivery Address**:
- Displayed the address that the user selected for delivery during checkout.

### 3. **Displayed Total Value of the Cart**:
- Calculated and displayed the total price of products in the cart.
- Updated the total dynamically based on the items in the cart.

### 4. **Added Confirm Order Button**:
- Included a **Confirm Order** button at the bottom of the summary page.

## Milestone 25:
### 1. **Create an Order Endpoint**:
   - Design an endpoint to receive product, user, and address details.
   - Validate the request and ensure proper format for all input fields.

### 2. **JWT Authentication**:
   - Verify the user’s token using JWT to authenticate the request.
   - If the token is invalid or missing, return an appropriate error message.

### 3. **Handle Multiple Products**:
   - Ensure that each product in the order has unique details but share the same address.

### 4. **Create Order Schema**:
   - created Schema for Order
   - Include relevant information such as product details, user, and shipping address in the order schema.

## Milestone 26:
### 1. **GET /user-orders-data**
  - Fetches all orders associated with the authenticated user.
  - Middleware: `verifyUser` (JWT token verification).
  - Returns a list of orders if the user is authenticated and exists.
  
### 2. **GetUserOrders**
  - Fetches all orders associated with the authenticated user.
  - Verifies if the user exists and if the provided `userId` is valid.
  - If valid, fetches orders from the database and returns them to the client.
