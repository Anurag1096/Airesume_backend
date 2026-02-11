import { UserData } from "./userType"

export const userDAO={
    Create:async(userInfo:UserData)=>{
        try{
            //call db with the required data
        }catch(error){
            throw new Error("Could not create user" + error)
        }
    },

    findById:async(id:string)=>{
        try{
            //code to find the given data 
        }catch(error){
            throw new Error("Id is not present in the db"+ error)
        }
    },
    findByEmail:async (email:string){
        try{
            //code to find email and return it 
        }catch(err){
            throw new Error("email not found"+ err)
        }
    },
    findAll:async()=>{
        try{

        }catch(err){
         throw new Error("Could not find all the records")
        }
    },
    updateById:async()=>{
        try{

        }catch(error){
            console.error(error)
            throw new Error("Could not updata the record")
        }
    },
    countUsers:async()=>{
        try{

        }catch(error){
            throw new Error("counting users failed")
        }
    },
    deleteUser:async ()=>{
        try{

        }catch(error){

        }
    },
    updatePassword:async()=>{
        try{

        }catch(error){

        }
    },
}