export default function wallet() {
   return (
      <>
         <h1>wallet</h1>
         <h2>test</h2>
      </>
   )
}

/* Mypage.js（完成版） e421 */

import React, { useState, useEffect } from "react";
//import { onAuthStateChenged, signOut } from "firebase/auth";
/*import { auth } from "./FirebaseConfig.js";
import {
   useNavigate,
   Navigate
} from "react-router-dom";

const Mypage = () => {
   const [user, setUser] = useState("");

   const [loading, setLoading] = useState(true);

   useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });
   }, []);

   const navigate = useNavigate();

   const logout = async () => {
      await signOut(auth);
      navigate("/login/");
   }

   return (
      <>
         {!loading && (
            <>
               {!user ? (
                  <Navigate to={`/login/`} />
               ) : (
                  <>
                     <h1>マイページ</h1>
                     <p>{user?.email}</p>
                     <button onClick={logout}>ログアウト</button>
                  </>
               )}
            </>
         )}
      </>
   );
};

export default Mypage;

*/