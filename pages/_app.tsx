import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {auth} from '../firebase/firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import{useAuthState} from 'react-firebase-hooks/auth'
import { useEffect } from 'react'

export default function App() {

  const [user,setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const login = async() =>{
    const result = await signInWithPopup(auth,googleAuth)
  }

  useEffect(() => {
    console.log(user);
  },
  [user])

  
  return(
    <>
    <h1>Login to TalkBox</h1>
    <button onClick={login}>Login</button>
    <button onClick={()=>{auth.signOut()}}>Sign Out</button>
    {user?  "Welcome, " + user.displayName : "No user" }

    </>
  )
}
