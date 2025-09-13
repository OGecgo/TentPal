


import Header from "components/Header/Header"
import LeftPanel from "components/LeftPanel/LeftPanel"

function Home (){
    return(
        <>


            <LeftPanel mode="userMode" levelPage={2} linkNext={{ link: "#", bool: true, lock: false }} linkPrev={{ link: "#", bool: true, lock: false }} /> 
            <Header panel={"messageBox"} message={'Home'} helpPage={"light"} />
        </>
    )

}

export default Home 