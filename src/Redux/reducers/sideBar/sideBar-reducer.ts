import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./action-sideBar";



interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;    
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const sideBarSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    //    usersFetching(state) {
    //     state.isLoading = true;
    //    },

    //    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //     state.isLoading = false;
    //     state.error = '';
    //     state.users = action.payload;
    //    },

    //    usersFetchingError(state, action: PayloadAction<string>) {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //    }

    },

    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
    
}) 

export default sideBarSlice.reducer;