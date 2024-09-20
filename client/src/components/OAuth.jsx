import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider,signInWithPopup,getAuth } from 'firebase/auth'
import {app} from '../firebase.js'
import {useDispatch} from 'react-redux'
import {signInSuccess} from '../redux/user/userSlice.js'
import {useNavigate} from 'react-router-dom'

function OAuth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()

const handleGoogleClick = async () =>{
const provider = new GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
try {
   const resultFromGoogle = await signInWithPopup(auth,provider) 
   const res = await fetch('/api/auth/google',{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
        name: resultFromGoogle.user.displayName,
        email: resultFromGoogle.user.email,
        googlePhotoUrl : resultFromGoogle.user.photoURL
    })
   })
   const data = await res.json()
   if(res.ok){
    dispatch(signInSuccess(data))
    navigate('/')
   }
} catch (error) {
    console.log(error)
}
}
  return (
    <button
    type="button" 
    onClick={handleGoogleClick}
    className="w-full flex items-center justify-center px-4 py-2 mb-4 text-sm font-semibold bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-red-500 hover:text-white transition-colors duration-300"
  >
    <FcGoogle className="mr-2" size={24} />
    Sign in with Google
  </button>
  )
}

export default OAuth