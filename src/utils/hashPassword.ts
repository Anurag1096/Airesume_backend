import bcrypt from 'bcrypt'


const SALT_PASS=10;

export default async function hashPassword(password:string): Promise<string> {
   try{
      const encryptedPass= await bcrypt.hash(password,SALT_PASS)
      return encryptedPass
   }catch(error){
    throw new Error("Could not hash password")
   }
}