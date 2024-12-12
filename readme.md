# Logout API Documentation

## Endpoint: `POST /api/logout`

The `logout` endpoint allows a user to log out of the system securely by:
1. Clearing authentication cookies.
2. Invalidating tokens.
3. Destroying session data.

---

### **Request**

- **URL**: `/api/logout`
- **Method**: `POST`
- **Headers**:
  - `Content-Type`: `application/json`
  - `Authorization`: `Bearer <auth_token>` (Optional, depending on your setup)
- **Cookies**: 
  - `authToken`: Required for identifying the user.
  - `refreshToken`: Required for invalidating the refresh token.

#### Example cURL Request

```bash
curl -X POST http://localhost:3000/api/logout \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <auth_token>" \
--cookie "authToken=<authToken>; refreshToken=<refreshToken>"
```

---

### **Response**

#### Success Response
- **Status Code**: `200 OK`
- **Body**:

```json
{
  "message": "Logged out successfully. All session data cleared."
}
```

#### Error Responses
- **Status Code**: `500 Internal Server Error`
- **Body**:

```json
{
  "message": "An error occurred during logout."
}
```

- **Status Code**: `401 Unauthorized` (if tokens are invalid or missing)
- **Body**:

```json
{
  "message": "Authentication required to perform this action."
}
```

---

### **Postman Test Guide**

#### Step 1: Create a Postman Collection
1. Open Postman.
2. Click on `Collections` and create a new collection named **Auth API**.

#### Step 2: Add a Request for `logout`
1. Click `+` to add a new request.
2. Set the request type to `POST`.
3. Enter the request URL: `http://localhost:3000/api/logout`.

#### Step 3: Set Headers
- Go to the `Headers` tab and add:
  - `Content-Type: application/json`
  - Optional: `Authorization: Bearer <auth_token>` (if applicable).

#### Step 4: Set Cookies
1. Go to the `Authorization` tab or `Cookies` section.
2. Add the cookies:
   - `authToken`: `<your_auth_token>`
   - `refreshToken`: `<your_refresh_token>`.

#### Step 5: Send the Request
1. Click `Send`.
2. Verify that the response has a status code of `200 OK` with a success message.

---

### **Implementation Notes**
- Ensure the backend uses HTTPS in production to protect cookies.
- Make sure cookies are set with `httpOnly`, `secure`, and `SameSite=Strict` to enhance security.
- Tokens should expire after a reasonable time to reduce risks of misuse.

---

### **Development Setup**

#### Prerequisites
- Node.js and npm installed.
- Backend server running on `http://localhost:3000`.

#### Steps to Run the API Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/todo_api.git
   cd todo_api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

---

### **Sample Response in Postman**

#### Success
- **Response Body**:
  ```json
  {
    "message": "Logged out successfully. All session data cleared."
  }
  ```

#### Failure
- **Response Body**:
  ```json
  {
    "message": "An error occurred during logout."
  }
  
