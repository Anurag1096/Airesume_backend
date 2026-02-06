import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { initDb } from "./db";

const PORT = process.env.PORT || 3000;
(async ()=>{
  try{
    await initDb()
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

  }catch(err){
    console.error("Failed to start server", err);
    process.exit(1);
  }
})()

