import axios from 'axios';
import { URL } from '../helper/url_helper';
export const getUserData = ()=>{
    return (dispatch)=>{
        // This Area be API Calling
        // We Also Input the Timing Method 
        axios.get(URL+'/api/users?page=2')
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            dispatch({ type:"ADD_USER_DATA",payload:response.data.data});
        })
        .catch(function (error) {
            // If must be Handling Error
            console.log(error);
        })
        .finally(function () {
            //Should be Excuted 
        });

       
    }
}