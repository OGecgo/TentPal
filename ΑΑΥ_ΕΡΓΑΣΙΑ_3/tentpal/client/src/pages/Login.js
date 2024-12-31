import Header from "../components/Headers/HeaderLogined";
import classes from "../styles/LoginForm.module.css";

function Login() {


    return (
    <>
      <div className = "left">
        <button className = "bottombuttons" style={{top: "80%", fontSize: "calc(100% + 3vh)"}} >exit</button>
      </div>

      <div className = {classes.centerContent}>
         <form>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>

            <button type="submit">Login</button>
         </form>
        </div>

      <Header />  
      
    </>

    
    );
}

export default Login;