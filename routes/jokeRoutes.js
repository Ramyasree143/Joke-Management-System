const express = require("express")
const router = express.Router()
const auth = require("../middleware/authMiddleware")
const {
addJoke,
getAllJokes,
getJokeById,
updateJoke,
deleteJoke
}= require("../controllers/jokeController")
router.post("/add",auth,addJoke)
router.get("/all",auth,getAllJokes)
router.get("/:id",auth,getJokeById)
router.put("/:id",auth,updateJoke)
router.delete("/:id",auth,deleteJoke)

module.exports = router;