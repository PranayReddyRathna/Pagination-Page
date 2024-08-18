import axios from 'axios';
const url="https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
const getData=async()=> {
    try{
    const response=await axios.get(`${url}`)
    return response.data;
    }
    catch(e){
        console.error(e)
    }
    
}
export default getData();
