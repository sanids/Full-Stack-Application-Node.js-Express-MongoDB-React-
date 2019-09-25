const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from the app");
});
const port = 4000;
app.listen(port, () => console.log("Node is listening"));