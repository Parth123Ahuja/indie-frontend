import { Outlet } from "react-router";
import Footer from "../Components/GlobalComponents/Footer";
import {MegaMenuWithHover} from "../Components/GlobalComponents/Navbar";

export default function Rootlayout(){

    return(
        <>
            <MegaMenuWithHover/>

                <Outlet />

            <Footer/>
        </>
        
    )
}