import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Input from "../../components/inputs/Input"

const SignUp = ({setCurrentPage}) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [error,setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";
    if(!fullName){
      setError("Please enter full name.")
      return;
    }
    if(!validateEmail(email)){
      setError("Please enter a valide email address.")
      return;
    }
    if(!password){
      setError("Please enter the password.")
      return;
    }
    setError("");

    try{
      // Add your login API call here
    }
    catch(error){
      if(error.response && error.response.data.message){
        setError(error.response.data.message);
      }
      else{
        setError("something went wrong.Please try again");
      }
    }



  };
  return <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
    <h3 className='text-lg font-semibold text-black'>Create an Account</h3>
    <p className='text-xs text-slate-700 mt-[5px] mb-6'>
      Join us today by entering your details below.
    </p>

    <form onSubmit={handleSignUp}>
      <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
      <div className='grid grid-cols-1 md:grid-cols-1 gap-2'> 
        <Input 
          value={fullName}
          onChange={({target}) => setFullName(target.value)}
          label="Full Name"
          placeholder="Rishi"
          type="text"
        />

        <Input 
          value={email}
          onChange={({target}) => setEmail(target.value)}
          label="Email Address"
          placeholder="rishim@gmail.com"
          type="text"
        />
        <Input 
          value={password}
          onChange={({target}) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />
      </div>

      {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

      <button type="submit" className=''>
        SIGN UP
      </button>
      <p className='text-slate-800 mt-3'>
        Already an account?{" "}
        <button
          className='font-medium text-primary underline cursor-pointer'
          onClick={() => {
            setCurrentPage("login");
          }}
        >
          Login
        </button>
      </p>
    </form>
  </div>
};

export default SignUp;