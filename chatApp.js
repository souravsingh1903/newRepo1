const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const messages = [];    // Array to store messages

app.get("/", (req, res) => {
    // Display messages on the page
    const messageList = messages.map(msg => `<li>${msg}</li>`).join('');;
    
    res.send(`
    <ul type="none">${messageList}</ul>
        <form action="/" method="POST">
            <input type="text" name="message" placeholder="message">
            <input type="hidden" name="username" id="username">
            <button type="submit">Send</button>
        </form>

        <script>
            document.querySelector('form').addEventListener('submit', function() {
                // Set the value of the hidden input field from localStorage
                document.getElementById('username').value = localStorage.getItem('username');
            });
        </script>
    `);
});

app.post("/", (req, res) => {
    const username = req.body.username;
    const message = req.body.message;

    console.log(username);
    console.log(message);

    const fullMessage = `${username}: ${message}`;
    
    // Store message in the array
    messages.push(fullMessage);

    // Store messages in the file
    fs.writeFile("username.txt", messages.join('\n'), { flag: 'w' }, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.redirect("/");
        }
    });
    res.redirect("/");
});

app.post("/login", (req, res) => {
    res.send(`
        <form action="/login" method="POST">
            <input type="text" name="username">
            <button type="submit">Login</button>
        </form>

        <script>
            document.querySelector('form').addEventListener('submit', function() {
                // Set the value of localStorage when submitting the form
                localStorage.setItem('username', document.querySelector('input[name="username"]').value);
            });
        </script>
    `);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
