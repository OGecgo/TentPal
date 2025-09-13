
import React, { useState } from "react";

import classes from './Order.module.css';

import LeftPanel from 'components/LeftPanel/LeftPanel';
import Header from 'components/Header/Header';
import MessageBox from 'components/MessageBox/MessageBox';

import potatoImg from 'assets/potato.jpg'
import chickenImg from 'assets/fried_chicken.jpg'
import cocacolaImg from 'assets/cocacola.jpeg'

function Order() {

    const [frenchFries, setFrenchFries] = useState(0);
    const [nuggets, setNuggets] = useState(0);
    const [cocaCola, setCocaCola] = useState(0);

    // position message
    const [posMessage, setPosMessage] = useState(0);
    const [chatMessages, setChatMessages] = useState([]);

    const generatePrice = () => {
        return (2.5 * frenchFries) + (3.5 * nuggets) + (1.5 * cocaCola);
    }

    const resetValues = () => {
        setFrenchFries(0);
        setNuggets(0);
        setCocaCola(0);
    }

    const sentOrder = () => {
        setPosMessage(posMessage + 1);
        setChatMessages(prev => [...prev, `Order with code #${posMessage} and cost ${(2.5 * frenchFries) + (3.5 * nuggets) + (1.5 * cocaCola)}€ shipped`]);
        resetValues();
    }

    return (
        <>

            <div className="centerContent" >
                <div className={classes.blocks}>

                    <div className={classes.displayMenu}>
                        <MessageBox message={"Τιμοκατάλογος"} width={"80%"} height={"10%"} top={"3%"} backgroundColor={"#B5AF94"} />
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
                                <button className={generatePrice() !== 0 ? classes.applyButton : classes.applybuttonOff} disabled={generatePrice() === 0} onClick={() => { sentOrder(); }}>
                                    <p className={classes.buttonP}>Αποστολή</p><br />
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className={classes.displayOrders}>
                        <div className={classes.chat}>
                            {chatMessages.map((msg) => (
                                <p className={classes.orderStyle}>{msg}</p>
                            ))}
                        </div>
                        <div className={classes.chatMessage}>
                            <input className={classes.textBox} placeholder="Not Work Error" type="text"></input>
                            <button className={classes.textButton} type="button"> {'>'} </button>
                        </div>
                    </div>

                </div>
            </div>

            <LeftPanel page="makeTent" levelMakeTent={5} linkNext={{ link: "#", bool: true, lock: true }} linkPrev={{ link: "#", bool: true }} />
            <Header panel={"messageBox"} message={'Καντίνα'} />
        </>
    );
}
export default Order;