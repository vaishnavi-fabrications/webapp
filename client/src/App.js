import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes,Route, useNavigate } from 'react-router-dom';
import Admin from "./pages/Admin";
import Designs from "./pages/Designs";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import { Actions } from "./redux/Store";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./database/firebase";
import AdminHome from "./pages/AdminHome";
import Construction from "./pages/Construction";
import Contents from "./pages/Contents";
import ImagePreView from "./pages/ImagePreview";
import AdminProducts from "./pages/AdminProducts";

const App = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AdminLogged = useSelector(state=>state.AdminLogged);
  const ConfigureView = () =>{
    if(window.innerWidth<=500){
      dispatch(Actions.setMobileView(true));
    }else{  
      dispatch(Actions.setMobileView(false));
    }
  }
  useEffect(()=>{
    ConfigureView();
  });
  window.addEventListener('resize',()=>{
    ConfigureView();
  });
  onAuthStateChanged(auth,(user)=>{
    if(user){
      if(!AdminLogged){
        dispatch(Actions.setAdminLogged(true));
        navigate('/adminHome');
      }
    }
  })

  return(
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/designs" element={<Designs/>}/>
        <Route path="/construction" element={<Construction/>}/>
        <Route path="/admin" element={<Admin/>}/>
        {AdminLogged && <Route path="/adminHome" element={<AdminHome/>}/>}
        {AdminLogged && <Route path="/adminproducts" element={<AdminProducts/>}/>}
        <Route path="/ricemill" element={<Contents/>}/>
        <Route path="/functionhall" element={<Contents/>}/>
        <Route path="/container" element={<Contents/>}/>
        <Route path="/msconstruction" element={<Contents/>}/>
        <Route path="/preview" element={<ImagePreView/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </React.Fragment>
  );
};

export default App;