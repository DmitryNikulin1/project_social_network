import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../../redux_store";
import { sideBarSlice } from "./sideBar-reducer";



// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(sideBarSlice.actions.usersFetching)
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(sideBarSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e) {
//         dispatch(sideBarSlice.actions.usersFetchingError(e.message))
//     }
// }



export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async(_, thunkAPI) => {
        try{
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        return response.data;

        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить посты")
        }
        
    }
)

