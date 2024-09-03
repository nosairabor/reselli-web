import { LoaderKey } from "@/components/utils/loaderKey";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from '../../service/authService';
import { startLoad, stopLoad } from "../slice/appSlice";
import { handleError } from './errorHandler';

export const login = createAsyncThunk (
    "login/user",
    async(payload, {dispatch, rejectWithValue}) => {
        dispatch(startLoad(LoaderKey.LOGIN_KEY));
        try {
            const res = await AuthService.login(payload.data);
            localStorage.setItem('userInfo', JSON.stringify(res.user)); 
            localStorage.setItem('token', res.tokens.access.token); 
            

            return res;
        } catch (err) {
            handleError(err, LoaderKey.LOGIN_KEY, dispatch)
            return rejectWithValue(err.response ? err.response.data : err.message);
            
        } finally {
            // stop loading eventually
            dispatch(stopLoad(LoaderKey.LOGIN_KEY));
        }
    }

);

export const signUp = createAsyncThunk (
    "signUp/user",
    async(payload, {dispatch, rejectWithValue}) => {
        dispatch(startLoad(LoaderKey.SIGNUP_KEY));
        try {
            const res = await AuthService.signUp(payload.data);
            
            
            if (res.user.firstName) {
                localStorage.setItem('userEmail', res.user.email);
                localStorage.setItem('firstName', res.user.firstName);
                localStorage.setItem('lastName', res.user.lastName);
            }
            return res;
        } catch (err) {
            handleError(err, LoaderKey.SIGNUP_KEY, dispatch)
            return rejectWithValue(err.response ? err.response.data : err.message);
            
        } finally {
            // stop loading eventually
            dispatch(stopLoad(LoaderKey.SIGNUP_KEY));
        }
    }

); 

export const forgetPassword = createAsyncThunk (
    "forgetPassword/user",
    async(payload, {dispatch, rejectWithValue}) => {
        dispatch(startLoad(LoaderKey.FORGET_PASSWORD));
        try {
            const res = await AuthService.forgetPassword(payload.data);
            
            return res;
        } catch (err) {
            handleError(err, LoaderKey.FORGET_PASSWORD, dispatch)
            return rejectWithValue(err.response ? err.response.data : err.message);
            
        } finally {
            // stop loading eventually
            dispatch(stopLoad(LoaderKey.FORGET_PASSWORD));
        }
    }

); 