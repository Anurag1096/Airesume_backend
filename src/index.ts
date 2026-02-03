import express from 'express';
const app= express();
const PORT=3000;


app.get("/",(_req,res)=>{
		res.json({message:"hello from the api "})

});

app.get("/upload-resume",(_req,res)=>{
		res.json({message:"your resume upload will use this api " })
})



app.listen(PORT,()=>{
		console.log(`Server is running on ${PORT}`)
});


