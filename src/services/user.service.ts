import { UserData } from "../Data_access_object/userType";
import hashPassword from "../utils/hashPassword";



export async function signUp(userData:UserData){
  const {name,email,password}= userData;

  const passwordHash=await hashPassword(password)

  // send this data to the dao

  
}