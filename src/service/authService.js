import axios from "axios";

export default class AuthService {

    static async login (data) {
            const res = await axios.post(`https://pearl-ecommerce.onrender.com/v1/auth/login`, data);
            // console.log(res.data, "resss.data");
            return res?.data || res;
    }

    static async forgetPassword (data) {
        const res = await axios.post(`https://pearl-ecommerce.onrender.com/v1/auth/forget-password`, data);
        // console.log(res.data, "resss.data");
        return res?.data || res;
    }

    // static async resetPassword (data) {
    //     const res = await axios.post(`/user/password-reset/`, data);
    //     // console.log(res.data, "resss.data");
    //     return res?.data || res;
    // }

    static async signUp (data) {
        const res = await axios.post(`https://pearl-ecommerce.onrender.com/v1/auth/register`, data);
        // console.log(res.data, "resss.data");
        return res?.data || res;
    }
    

}