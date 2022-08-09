import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)

export default function SignIn() {
   return (
      <>
         <h1>SignIn</h1>
         <h2>test</h2>
      </>
   )
}

