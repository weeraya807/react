import React, { useState,useEffect } from "react";
import Signin from "./Signin";  //import เพื่อไม่ให้โค้ดทำงานหนัก
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { createUserWithEmailAndPassword , getAuth , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasAccount, setHasAccount] = useState(false);//เช็คหน้า singup,signin ถ้ามีแสดงหน้า signin ถ้าไม่มีแสดงหน้า signup เป็น bool

    const handleEmail = (e) => { //e รับค่าจาก input(email)
        setEmail(e.target.value);  //ฟังก์ชันอัพเดทค่าตัว email ใน e รับค่าลงมา
    };

    const handlePassword = (e) => { 
        setPassword(e.target.value); 
    };

    const authListener = () => {
        auth.onAuthStateChanged((user) => {
            if(user) {
               window.localStorage.clear();
            } else {
               
                window.localStorage.clear();
            }
        });
    };

    useEffect(() => {
        authListener(); //จะใช้ฟังก์ชันตลอดที่อยู่หน้า home
    },[]);

    const handleSignup = () => { 
        createUserWithEmailAndPassword(getAuth(),email,password)
        .then((response) => {
            navigate("/profile");
            window.localStorage.setItem("user", response.user.email);
            setEmail(response.user.email);
            console.log("response", response);
        })
        .catch((err) => {
            console.log("err", err);
        }); //then จะ return ค่ากลับมาใน createUserWithEmail //ถ้า error จะส่งค่าไปที่ catch
    };

    const handleSignin = () => { 
        signInWithEmailAndPassword(getAuth(),email,password)
        .then((response) => {
            navigate("/profile");
            window.localStorage.setItem("user", response.user.email);
            setEmail(response.user.email);
            console.log("response", response);
        })
        .catch((err) => {
            console.log("err", err);
        }); 
    };

    return  (
        <Container
        className="shadow p-4 mb-5 bg-white rounded"
        style={{ width : "500px"}}
    >
        {hasAccount?<Signup 
         email={email}  //ส่งค่า password email เป็น props ตัวแปรอีเมล value เป็นอีเมล
        password={password} 
        hasAccount={hasAccount} 
        setHasAccount={setHasAccount} 
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        handleSignup={handleSignup}/> :
        <Signin
        email={email}  
       password={password} 
       hasAccount={hasAccount} 
       setHasAccount={setHasAccount} 
       handleEmail={handleEmail}
       handlePassword={handlePassword}
       handleSignin={handleSignin}/>}
        {/* <h1>Hello</h1> */}
        </Container>
    );
}

export default Home; //ไฟล์ข้างนอกเรียกไฟล์ component ได้
