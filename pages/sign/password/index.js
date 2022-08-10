//課題パスワード変更
firebase.auth().currentUser.updatePassword(newPassword)

export default function SignIn() {
   return (
      <>
         <h1>SignIn</h1>
         <h2>test</h2>
      </>
   )
}
