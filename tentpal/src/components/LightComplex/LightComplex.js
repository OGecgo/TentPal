import mycss from './LightComplex.module.css';
import React, { useState } from "react";
import MessageBox from '../../components/MessageBox/MessageBox';


export default function LightComplex(){

    
    return(
    <>
    <MessageBox message = {'Complex light section'} />
        <div className={mycss.container}>
            <button className={mycss.button33}>Apply changes</button>
        </div>
    </>
)

}