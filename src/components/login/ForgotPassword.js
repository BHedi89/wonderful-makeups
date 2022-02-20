import React from "react";
import classes from "./ForgotPassword.module.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Alert from "../layout/Alert";
import Hero from "../layout/Hero";
import ShapeDivider from "../layout/ShapeDivider";
import Footer from "../layout/Footer";
import heroImage from "../images/hero/photo-1597143720029-61ddd2e4733c.jpg"; 

const Forgotpassword = () => {
    const [email, setEmail] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [alertMsg, setAlertMsg] = React.useState("");

    function resetPassword(e) {
        e.preventDefault();
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setAlertMsg("Check your email to reset your password!");
                setOpen(!open);
            })
            .catch((error) => {
                if(email === "") {
                    setAlertMsg("Missing email!");
                    setOpen(!open);
                } else {
                    setAlertMsg("Wrong email!");
                    setOpen(!open);
                }
               
            })
    }

    const handleClose = () => {
        setOpen(!open);
    }

    return (
        <>
            <Hero 
                title="Wonderful Makeups"
                heroImage={heroImage}
            />
            <ShapeDivider />
            <div className={classes.container}>
                {open && <Alert
                        content={<>
                            <p>{alertMsg}</p>
                        </>}
                        handleClose={handleClose}
                />}
                <h1>Forgot password</h1>
                <form className={classes.form}>
                    <div>
                        <label>Add your email:</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className={classes.sendbtn} onClick={resetPassword}>Send</button>
                </form>
            </div>
            <ShapeDivider />
            <div className={classes.footer}> 
                <Footer />
            </div>
        </>
    )
}

export default Forgotpassword;