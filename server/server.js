require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// next tells middleware to send req to next middleware
// or final middleware: route handler
app.use(cors());

// this middleware takes json and turns it into js and attaches it to property called body
app.use((express.json())); // req.body

//ROUTES
// get all to do
app.get ("/todos", async(req, res) => {
    try {       
        const allToDos = await pool.query("SELECT * FROM todo")
        res.json(allToDos.rows);
    } catch (err) {
        console.error(err.message)
    }
});

// get a to do
app.get("/todos/:id", async(req, res) => {
    try {       
        // id will be stored in req.params
        const { id } = req.params;
        const toDo = await pool.query(
            "SELECT * FROM todo WHERE id = $1", 
            [id]
        )
        res.json(toDo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// add a to do
app.post("/todos", async(req, res) => {
    try {
        const { description, is_completed } = req.body;
        const newToDo = await pool.query (
            "INSERT INTO todo (description, is_completed) VALUES($1,$2) RETURNING *",
            [description, is_completed]
        );

        res.json(newToDo.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

// update a to do
app.put("/todos/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const { is_completed } = req.body;
        const updateToDo = await pool.query (
            "UPDATE todo SET is_completed = $1 WHERE id = $2",
            [is_completed, id]
        );

        res.json("to do was updated")
    } catch (err) {
        console.log(err.message);
    }
});

// delete a to do
app.delete("/todos/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteToDo = await pool.query ( 
            "DELETE FROM todo WHERE id = $1",
            [id]
        )

        res.json("to do was deleted")
    } catch (err) {
        console.log(err.message);
    }
});

// envrionment variables can be used to update port numbers automatically
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is on port ${port}`)
});
