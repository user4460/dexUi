//signupのfirebaseを行う

import { Input, Button, Link } from '@chakra-ui/react'
import {
   FormControl,
   FormLabel,
   FormErrorMessage,
   FormHelperText,
} from '@chakra-ui/react'

export default function signup() {
   return (
      <>
         <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We will never share your email.</FormHelperText>
         </FormControl>
         <p>username</p>
         <Input placeholder='Basic usage' />
         <p>password</p>
         <Input placeholder='Basic usage' />
      </>
   )
}


//課題アプリ　ログアウト　サインアップ
// firebase.auth().createUserWithEmailAndPassword()
// firebase.firestore().collection('users').doc(user.uid).set({ name: "hoge" })

/* Register.js
//https://ralacode.com/blog/post/react-firebase-authentication/ e421
import React, { useState, useEffect } from "react";
import {
   createUserWithEmailAndPassword,
   onAuthStateChanged
} from "firebase/auth";
import { auth } from "./FirebaseConfig.js";
/* 「Link」をimport↓
import { Navigate, Link } from "react-router-dom";

const Register = () => {
   const [registerEmail, setRegisterEmail] = useState("");
   const [registerPassword, setRegisterPassword] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
         );
      } catch (error) {
         alert("正しく入力してください");
      }
   };

   const [user, setUser] = useState("");

   useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
      });
   }, []);

   return (
      <>
         {user ? (
            <Navigate to={`/`} />
         ) : (
            <>
               <h1>新規登録</h1>
               <form onSubmit={handleSubmit}>
                  <div>
                     <label>メールアドレス</label>
                     <input
                        name="email"
                        type="email"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                     />
                  </div>
                  <div>
                     <label>パスワード</label>
                     <input
                        name="password"
                        type="password"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                     />
                  </div>
                  <button>登録する</button>
                  {/* ↓リンクを追加
                  <p>ログインは<Link to={`/login/`}>こちら</Link></p>
               </form>
            </>
         )}
      </>
   );
};
*/
//export default Register;
