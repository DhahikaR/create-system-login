# Node Js JWT Auth Backend

A REST API jwt Authorization backend using nodejs and express. This code uses Sequelize as a database.

Use two collections, one for users and another for tokens. Token refreshing is supported, expired token will be discarded using cookie.

Access token expiry and refresh token expiry can be tuned in the files controllers/refreshToken.js.

A sample middleware can be found in middlewares/verifyToken.js, where 3rd party apps request the public JWT to verify the tokens.

## Run Locally

Clone the project

```bash
  git clone https://github.com/DhahikaR/create-system-login.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node src/main
```

## API Reference

Here are some main api usage, more details can be found in [routes](https://github.com/DhahikaR/create-system-login/blob/main/src/routes/index.js)

#### POST /register

Request Body

```http
  {
    "name": "user",
    "email": "user@gmail.com",
    "password": "test",
    "confirmPassword": "test"
}
```

Response

```http
{
  "msg": "Register Successful"
}
```

#### POST /login

Request Body

```http
  {
    "email": "user@gmail.com",
    "password": "test"
}
```

Response

```http
{
  "accessToken": "JWT Token"
}
```

#### PATCH /users/:id

Request Body

```http
{
"name": "user",
"email": "user@gmail.com",
"phone_number": "xxxxxxxxxxx"
}
```

Response

```http
{
    "name": "user",
    "email": "user@gmail.com",
    "phone_number": "087654321234"
}
```
