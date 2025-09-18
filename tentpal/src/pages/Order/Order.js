
import React, { useState } from "react";

import classes from './Order.module.css';

import LeftPanel from 'components/LeftPanel/LeftPanel';
import Header from 'components/Header/Header';

import potatoImg   from 'assets/food/potato.jpg'
import chickenImg  from 'assets/food/fried_chicken.jpg'
import cocacolaImg from 'assets/food/cocacola.jpeg'

function Order() {

    const [frenchFries, setFrenchFries] = useState(0);
    const [nuggets, setNuggets] = useState(0);
    const [cocaCola, setCocaCola] = useState(0);

    // position message
    const [posMessage, setPosMessage] = useState(0);
    const [chatMessages, setChatMessages] = useState([]);
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
        setPosMessage(posMessage + 1);
        let temp = chatMessages;
        if (type === "order") 
            temp.push(<p className={classes.orderStyle} >Order with code #{posMessage + 1} and cost {generatePrice()}€ shipped</p>);
        else  
            temp.push(<p className={classes.orderMsgStyle}>{msg}</p>);
        setChatMessages(temp);
        setChatInput("");
        resetValues();
    }

    return (
        <>

            <div className="centerContent" >
                <div className={classes.blocks}>

                    <div className={classes.displayMenu}>
                        <p className={classes.mainTitle} width={"80%"} height={"10%"} top={"3%"} backgroundColor={"#B5AF94"}>Τιμοκατάλογος</p>
                        <div className={classes.menuBlock}>
                            <div className={classes.menuItem}>
                                <div className={classes.pBlock}>
                                    <p className={classes.title}>Πατάτες Τηγανητές</p>
                                    <p className={classes.data}>Τιμή: 2.50€</p>
                                    <p className={classes.data}>Τεμάχια: {frenchFries}</p>
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
                                    <p className={classes.title}>Κοτομπουκιές</p>
                                    <p className={classes.data}>Τιμή: 3.50€</p>
                                    <p className={classes.data}>Τεμάχια: {nuggets}</p>
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
                                    <p className={classes.data}>Τιμή: 1.50€</p>
                                    <p className={classes.data}>Τεμάχια: {cocaCola}</p>
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
                                <p className={classes.titlePrice}>Σύνολο: {generatePrice()}€</p>
                                <button className={generatePrice() !== 0 ? classes.applyButton : classes.applybuttonOff} disabled={generatePrice() === 0} onClick={() => { sentOrder("order"); }}>
                                    <p className={classes.buttonP}>Αποστολή</p><br />
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
            <Header panel={true} message={'Καντίνα'} userOn={true} />
        </>
    );
}
export default Order;