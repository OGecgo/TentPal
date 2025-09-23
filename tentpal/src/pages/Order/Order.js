
import React from "react";
import { useState } from "react";

import classes from './Order.module.css';

import LeftPanel from 'components/LeftPanel/LeftPanel';
import Header    from 'components/Header/Header';

import potatoImg   from 'assets/food/potato.jpg'
import chickenImg  from 'assets/food/fried_chicken.jpg'
import cocacolaImg from 'assets/food/cocacola.jpeg'

import messengerData from "dataSet/messengerData";

import help from "assets/info/Page8.png"

function Order() {

    const [frenchFries, setFrenchFries] = useState(0);
    const [nuggets, setNuggets] = useState(0);
    const [cocaCola, setCocaCola] = useState(0);

    // position message
    const [chatMessages, setChatMessages] = useState(messengerData.getChatMessage());
    const [chatInput, setChatInput] = useState("");

    const generatePrice = () => {
        return (2.5 * frenchFries) + (3.5 * nuggets) + (1.5 * cocaCola);
    }

    const resetValues = () => {
        setFrenchFries(0);
        setNuggets(0);
        setCocaCola(0);
    }

    const sentOrder = (type, msg) => {
        let temp = chatMessages;
        if (type === "order") {
            temp.push(<p key={chatMessages.length} className={classes.orderStyle} >Order #{Math.floor(Math.random()*1000)} shipped. Total {generatePrice()}€</p>);
        }
        else  {
            if (msg !== "")
                temp.push(<p key={chatMessages.length} className={classes.orderMsgStyle}>{msg}</p>);
        }
        setChatMessages(temp);
        messengerData.setChatMessage(temp);
        setChatInput("");
        resetValues();
    }

    return (
        <>

            <div className="centerContent" >
                <div className={classes.blocks}>

                    <div className={classes.displayMenu}>
                        <p className={classes.mainTitle}>Price list</p>
                        <div className={classes.menuBlock}>
                            <div className={classes.menuItem}>
                                <div className={classes.pBlock}>
                                    <p className={classes.title}>French Fries</p>
                                    <p className={classes.data}>Price: 2.50€</p>
                                    <p className={classes.data}>Quantity: {frenchFries}</p>
                                </div>
                                <div className={classes.foodBlock}>
                                    <div className={classes.imgBlock}>
                                        <img className={classes.img} src={potatoImg} alt="potato"></img>
                                    </div>
                                    <button className={classes.buttonAdd} onClick={() => { setFrenchFries((frenchFries) => frenchFries + 1); }} variant="outline"> + </button>
                                    <button className={classes.buttonAdd} onClick={() => { if (frenchFries > 0) { setFrenchFries((frenchFries) => frenchFries - 1); } }} variant="outline"> - </button>
                                </div>
                            </div>

                            <div className={classes.menuItem}>
                                <div className={classes.pBlock}>
                                    <p className={classes.title}>Chicken Nuggets</p>
                                    <p className={classes.data}>Price: 3.50€</p>
                                    <p className={classes.data}>Quantity: {nuggets}</p>
                                </div>
                                <div className={classes.foodBlock}>
                                    <div className={classes.imgBlock}>
                                        <img className={classes.img} src={chickenImg} alt="chicken"></img>
                                    </div>
                                    <button className={classes.buttonAdd} onClick={() => { setNuggets((nuggets) => nuggets + 1); }} variant="outline"> + </button>
                                    <button className={classes.buttonAdd} onClick={() => { if (nuggets > 0) { setNuggets((nuggets) => nuggets - 1); } }} variant="outline"> - </button>
                                </div>
                            </div>

                            <div className={classes.menuItem}>
                                <div className={classes.pBlock}>
                                    <p className={classes.title}>Coca Cola</p>
                                    <p className={classes.data}>Price: 1.50€</p>
                                    <p className={classes.data}>Quantity: {cocaCola}</p>
                                </div>
                                <div className={classes.foodBlock}>
                                    <div className={classes.imgBlock}>
                                        <img className={classes.img} src={cocacolaImg} alt="coca cola"></img>
                                    </div>
                                    <button className={classes.buttonAdd} onClick={() => { setCocaCola((cocaCola) => cocaCola + 1); }} variant="outline"> + </button>
                                    <button className={classes.buttonAdd} onClick={() => { if (cocaCola > 0) { setCocaCola((cocaCola) => cocaCola - 1); } }} variant="outline"> - </button>
                                </div>
                            </div>

                            <div className={classes.menuPrice}>
                                <p className={classes.titlePrice}>Total Price: {generatePrice()}€</p>
                                <button className={generatePrice() !== 0 ? classes.applyButton : classes.applybuttonOff} disabled={generatePrice() === 0} onClick={() => { sentOrder("order"); }}>
                                    <p className={classes.buttonP}>Confirm Order</p><br />
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className={classes.displayOrders}>
                        <div className={classes.chat}>
                            {chatMessages}
                        </div>
                        <form className={classes.chatMessage} onSubmit={(e) => { e.preventDefault(); sentOrder("message", chatInput);}}>
                            <input className={classes.textBox} placeholder="Chat" type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)}></input>
                            <button className={classes.textButton} type="submit"> {'>'} </button>
                        </form>
                    </div>

                </div>
            </div>

            <LeftPanel mode="userMode" levelPage={0} linkNext={{ link: "#", bool: false, lock: false }} linkPrev={{ link: "/Home", bool: true }} />
            <Header panel={true} message={'Canteen'} userOn={true} helpPage={help} />
        </>
    );
}
export default Order;