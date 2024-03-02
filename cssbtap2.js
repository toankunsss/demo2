const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1 style="color: aliceblue;"> Don't miss this special offer</h1>
    <p style="color: aliceblue;">Get it now for just $10! The price will be increased after 50 downloads</p>
    <br>
    <button class="button1">
        <p style="color: aliceblue;">Get the latest version of Bootslander</p>
    </button >
</body>
</html>
`
