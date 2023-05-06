import Navigation from "../../components/navigation/navigation.component";
import SideBar from "../../components/sidebar/sideBar.component";
import { SideBarContext } from "../../contexts/sidebar/sideBar.context";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

function NavigationAndSideBar(){
    const {showSideBar} = useContext(SideBarContext)
    return(
        <>
            <Navigation/>
            {showSideBar && <SideBar/>}
            <Outlet/>
        </>
    )
}

export default NavigationAndSideBar