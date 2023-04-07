//Node’s require function to use the express module. require is similar to keywords like import or 
//include in other languages. require takes the name of a package as a string argument and returns a package. 
const express=require("express");
//Calls the express function "express()" and puts new Express application inside the app variable 
const app=express()
//Axios is a promise-based HTTP client for Node.js and the browser. Sending asynchronous 
//HTTP queries to REST endpoints and performing CRUD operations is simple using Axios POST request and GET request. It can be used directly in JavaScript or in conjunction with a library like Vue or React.
const axios= require("axios")

//Using async-await to manage responses
app.get("/", async (req, res) => {
	try {
		const response = await axios.get("https://breakingbadapi.com/api/characters")
		//Axios can make a GET request to “get” data from a server API. The axios.get() method is used to make an HTTP get request.	
		res.status(200).json(response.data)
		//Sets the HTTP status for the response-res.status(code)
		//res-send Sends the HTTP response.
//The body parameter can be a Buffer object, a String, an object, Boolean, or an Array
    res.send(response)
	} catch (err) {
		res.status(500).json({ message: err })
	}
})
//Syntax of app.listen method
//app.listen([port[, host[, backlog]]][, callback])

app.listen(3000 ,function(){
    console.log("Server has started running")
})