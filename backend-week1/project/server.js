// POST request first tine

const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

// app.get("/day2", (req, res) =>{
//     res.json({ message: "new day2"});
// });


// app.listen(PORT, () =>{
//     console.log(`Server is running on port ${PORT}`);
// });

app.post("/user", (req, res)=>{
    console.log(req.body);

    res.json({
        message: "user received",
    });
});

// app.get("/day2", (req, res) =>{
//     res.json({ message: "new day2"});
// });


app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});
