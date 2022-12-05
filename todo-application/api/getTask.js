import axiosInstance from "./base";
import { getToken } from "../utilities/getToken";

export const getTask = async()=>{
    try{
        const result=await axiosInstance(getToken()).get(`/task`);
        return result.data;
    }catch(error){
        console.log(error);
    }
    
}