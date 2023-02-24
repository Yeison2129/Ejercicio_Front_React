import React from "react";
import { Logo } from "../../UI/Logo/Logo";
import { Navbar } from "../../UI/Navbar/Navbar";
import { Button } from "../../UI/Button/Button";
import { Logo2 } from "../../UI/Logo2/Logo2"


export const Header=()=>{
    return(
        <header>
            <Logo/>
            <Navbar/>
            <Logo2/>
        </header>
    )
}