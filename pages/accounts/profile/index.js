import {
   List,
   ListItem,
   ListIcon,
   OrderedList,
   UnorderedList,
} from '@chakra-ui/react'

export default function wallet() {
   return (
      <>
         <UnorderedList>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
         </UnorderedList>
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