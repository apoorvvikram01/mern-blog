import React,{useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { Alert, Spinner } from "flowbite-react";
import {signInStart,signInSuccess,signInFailure} from "../redux/user/userSlice.js"
import { useDispatch ,useSelector} from "react-redux";



const SignIn = () => {
  const [formData,setFormData] = useState({});
  const {loading,error:errorMessage} = useSelector(state => state.user )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
   setFormData({...formData ,[e.target.id]:e.target.value.trim()});
  }
   const handleSubmit = async (e)=>{
    e.preventDefault();
    if( !formData.password || !formData.email ){
      return dispatch(signInFailure('Please fill all the fields'))
    }
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return dispatch(signInFailure(data.message));
      }
   
      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
     dispatch(signInFailure(error.message));
    }
   }
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side of the signup page (hidden on small screens) */}
      <div className="hidden md:flex w-1/2 bg-gray-100 p-8 md:p-16 justify-center">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">
            BlogApp
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Welcome to BlogApp! Sign in to create and share your stories.
          </p>
        </div>
      </div>

      {/* Right side (signin form) */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center px-8 py-16 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Sign In
          </h2>

          {/* Form starts here */}
          <form className="w-full" onSubmit={handleSubmit}>
         

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="name@example.com"
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

      

            {/* Submit Button */}
            <button
            disabled={loading}
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-md focus:outline-none"
            >
             {loading? (
              <>
              <Spinner size='sm' />
              <span className="pl-3">Loading...</span>
              </>
             ) : "Sign Up "
            }
            </button>
          </form>
          {/* Form ends here */}

          {/* Already signed in link */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <NavLink
              to="/signup"
              className="text-indigo-600 hover:underline"
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
      {
      errorMessage &&(
        <Alert className="mt-5" color='failure'>
        {errorMessage}
        </Alert>
      )
    }
    </div>
 
  );
};

export default SignIn;

