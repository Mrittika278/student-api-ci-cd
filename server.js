const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/students", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Mrittika",
            department: "CSE"
        }
    ]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});