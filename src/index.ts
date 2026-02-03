import express from 'express';
const app= express();
const PORT=3000;


app.get("/",(_req,res)=>{
		res.json({message:"hello from the api "})

});

app.listen(PORT,()=>{
		console.log(`Server is running on ${PORT}`)
});


