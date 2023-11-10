const Store = require("../db/store.js");
const router = require("express").Router();

// GET Route for /api/notes
router.get("/notes", (req, res) => {
    try {
        const store = new Store()
        const notes = store.read(res);
        res.status(200).json(JSON.parse(notes))
    } catch (err) {
        res.status(500).json({ status: "error", payload: err.message })
    }
})

// POST Route for /api/notes 
router.post("/notes", async (req, res) => {
    try {
        const store = new Store()
        req.body.id = Math.random()
        store.write(req.body);
        res.status(200).json({ status: "success" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ status: "error", payload: err.message })
    }
})

module.exports = router;
