import { Input ,Button,Link } from '@chakra-ui/react'

export default function SignIn() {
   return (
      <>
         <Input placeholder='mail' />
         <Input placeholder='password' />
         <Button colorScheme='blue'>login</Button><br></br>

         <Link >password reset</Link><br></br>
         <Link >signup</Link>
      </>
   )
}

/*課題アプリログインv9
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
   //コパイロット.then
   .then(() => {
      // Sign in successful.

   })

//課題メルアドユーザ確認承認
firebase.auth().currentUser.sendEmailVerification()
*/

// e421
/* Login.js（完成版） */

//import React, { useState, useEffect } from "react";
//import {
  // signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
//import { auth } from "./FirebaseConfig.js";
/* 「Link」をimport↓ */
/* import { Navigate, Link } from "react-router-dom";

const Login = () => {
   const [loginEmail, setLoginEmail] = useState("");
   const [loginPassword, setLoginPassword] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
         );
      } catch (error) {
         alert("メールアドレスまたはパスワードが間違っています");
      }
   };

   const [user, setUser] = useState();

   useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
      });
   });

   return (
      <>
         {user ? (
            <Navigate to={`/`} />
         ) : (
            <>
               <h1>ログインページ</h1>
               <form onSubmit={handleSubmit}>
                  <div>
                     <label>メールアドレス</label>
                     <input
                        name="email"
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                     />
                  </div>
                  <div>
                     <label>パスワード</label>
                     <input
                        name="password"
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                     />
                  </div>
                  <button>ログイン</button>
                  {/* ↓リンクを追加 */
{/*<p>新規登録は<Link to={`/register/`}>こちら</Link></p>
               </form>
            </>
         )}
      </>
   );
};


export default Login; */}

