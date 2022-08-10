//課題アプリ　ログアウト　サインアップ
// firebase.auth().createUserWithEmailAndPassword()
// firebase.firestore().collection('users').doc(user.uid).set({ name: "hoge" })

function signup() {
   return <div>signup</div>
}

export default signup

/* Register.js */
//https://ralacode.com/blog/post/react-firebase-authentication/ e421
import React, { useState, useEffect } from "react";
import {
   createUserWithEmailAndPassword,
   onAuthStateChanged
} from "firebase/auth";
import { auth } from "./FirebaseConfig.js";
/* 「Link」をimport↓ */
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
                  {/* ↓リンクを追加 */}
                  <p>ログインは<Link to={`/login/`}>こちら</Link></p>
               </form>
            </>
         )}
      </>
   );
};

//export default Register;
