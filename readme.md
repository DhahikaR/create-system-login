## API Reference

Here are some main api usage, more details can be found in [routes](https://github.com/DhahikaR/create-system-login/blob/main/routes/index.js)

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
