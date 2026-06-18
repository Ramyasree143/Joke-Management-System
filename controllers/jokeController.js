const Joke = require("../models/Joke")
//add
const addJoke=async(req,res)=>{
    try{
        const joke=await Joke.create({
            joke:req.body.joke,
            category:req.body.category,
            createdBy:req.user.id
        })
        res.status(201).json(joke)
    }catch(err){
        res.status(500).json({
        message:error.message
        })
    }
}

//get all
const getAllJokes = async(req,res)=>{
    const jokes = await Joke.find()
    res.json(jokes)
}
//get by id
const getJokeById = async(req,res)=>{
    const joke = await Joke.findById(req.params.id)
    res.json(joke)
}
//update
const updateJoke=async(req,res)=>{
    const joke = await Joke.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
    )
    res.json(joke)
}
//delete
const deleteJoke=async(req,res)=>{
    await Joke.findByIdAndDelete(
    req.params.id
    )
    res.json({
    message:"Joke Deleted Successfully"
    })
}

module.exports={
    addJoke,
    getAllJokes,
    getJokeById,
    updateJoke,
    deleteJoke
}