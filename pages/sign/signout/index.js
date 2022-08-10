//課題アプリ ログアウトv9
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
signOut(auth).then(() => {
   // Sign-out successful.
}).catch((error) => {
   // An error happened.
});

export default function signout() {
   return (
      <>
         <h1>singout</h1>
         <h2>test</h2>
      </>
   )
}