import axios from 'axios';

export const login = async(data)=>{
    try{
        const result = await axios.post('http://192.168.1.8:8000/api/login',data);
        return result.data;
    }catch(error){
        console.log(error);
    }    
}