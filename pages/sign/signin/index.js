//課題アプリログインv9
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
   //コパイロット.then
   .then(() => {
      // Sign in successful.

   })

//課題メルアドユーザ確認承認
firebase.auth().currentUser.sendEmailVerification()

export default function SignIn() {
   return (
      <>
         <h1>SignIn</h1>
         <h2>test</h2>
      </>
   )
}

