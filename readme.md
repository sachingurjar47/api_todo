# Todo API Documentation

## Introduction

This is a simple Todo API that allows users to register, log in, manage todo items, and handle authentication with JWT tokens.

## Base URL
http://localhost:5000/

Authentication API
### Register
Endpoint: `http://localhost:5000/api/auth/register`
Method: `POST`
Request Body:
```
{
  "name": "Sachin G",
  "email": "saching47@gmail.com",
  "password": "password123"
}
```

Response:

```
{
  "message": "User  registered successfully"
}
```


### Login
Endpoint: `http://localhost:5000/api/auth/login`
Method: POST
Request Body:
```
{
  "email": "saching47@gmail.com",
  "password": "password123"
}

```
Response :
```
{
  "user": {
    "id": "675ada547fd1d05e427a5fa9",
    "name": "Sachin G",
    "email": "saching47@gmail.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGFuIjoiMjMwfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

### Logout
Endpoint: http://localhost:5000/api/auth/logout
Method: POST
Request Body: None
Response:

```
{
  "message": "Logged out successfully"
}

```


## Todo API
### Create Todo
Endpoint: http://localhost:5000/api/todos
Method: POST
Request Body:

```
{
  "title": "Learn Node.js",
  "description": "Complete Backend tutorials and practice examples."
}
```

Response:
```
{
  "_id": "675adba61dea2286fee0e03d",
  "title": "Learn Node.js",
  "description": "Complete Backend tutorials and practice examples.",
  "completed": false,
  "user": "675ada547fd1d05e427a5fa9",
  "createdAt": "2024-12-12T12:48:38.482Z",
  "updatedAt": "2024-12-12T12:49:01.948Z",
  "__v": 0
}
```


### Get Todos
Endpoint: http://localhost:5000/api/todos
Method: GET
Request Body: None
Response:

```
[
  {
    "_id": "675adba61dea2286fee0e03d",
    "title": "Learn Node.js",
    "description": "Complete Backend tutorials and practice examples.",
    "completed": false,
    "user": "675ada547fd1d05e427a5fa9",
    "createdAt": "2024-12-12T12:48:38.482Z",
    "updatedAt": "2024-12-12T12:49:01.948Z",
    "__v": 0
  }
]
```
### Update Todo
Endpoint: http://localhost:5000/api/todos/:id
Method: PUT
Request Body:
```
{
  "title": "Learn Node.js",
  "description": "Complete Backend tutorials and practice examples."
}

```
Response:

```
{
  "_id": "675adba61dea2286fee0e03d",
  "title": "Learn Node.js",
  "description": "Complete Backend tutorials and practice examples.",
  "completed": false,
  "user": "675ada547fd1d05e427a5fa9",
  "createdAt": "2024-12-12T12:48:38.482Z",
  "updatedAt": "2024-12-12T12:49:01.948Z",
  "__v": 0
}
```

Delete Todo
Endpoint: http://localhost:5000/api/todos/:id
Method: DELETE
Request Body: None


