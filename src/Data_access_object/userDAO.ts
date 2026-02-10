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
    }
}