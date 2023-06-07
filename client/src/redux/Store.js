import { configureStore, createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
    name:"slice",
    initialState:{
        MobileView:false,
        AdminLogged:false,
        Drawer:false
    },
    reducers:{
        setMobileView(state,actions){
            state.MobileView = actions.payload;
        },
        setAdminLogged(state,actions){
            state.AdminLogged = actions.payload;
        },
        setDrawer(state,actions){
            state.Drawer = actions.payload;
        }
    }
});

const Actions = Slice.actions;
const Store = configureStore({
    reducer:Slice.reducer
});

export { Actions,Store };