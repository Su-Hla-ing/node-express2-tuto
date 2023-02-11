import express, { Request, Response } from 'express';

import dotenv from 'dotenv';
dotenv.config();
const Api_url = process.env.Api_Url;

const app = express();

app.use(express.static('public'));

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="shortcut icon" href="#"/>
</head>
<body>
    <h1>hello world</h1>
    <script type="text/javascript">
    console.log('hello')
    localStorage.setItem("ApiUrl", "${Api_url}")
      window.location.href = "/"
    </script>
</body>
</html>
`
app.get('/api/users', (req:Request, res:Response) => {
    res.send({name: "Alex", age: 20, email: "alex@gmail.com"})
})

app.get('/api', (req:Request, res:Response) => {
    res.send(html)
})

app.listen(3000, () => {
    console.log("Server started: on port 3000")
})