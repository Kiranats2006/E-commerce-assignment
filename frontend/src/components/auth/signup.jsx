import { useState } from "react";
import validation from "../../validation";
import { Link, useNavigate } from "react-router-dom"; // Import Link for routing
import axios from 'axios';

export default function SignUpPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    file: "",
  });
  const [error, setError] = useState("");
  const navigateUser = useNavigate();


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if(name=='file'){
      setData({
        ...data,
        [name]: files[0],
      });
    }else{
      setData({
        ...data,
        [name]:value
      })
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const nameV = validation.validateName(data.name);
    const emailV = validation.validateEmail(data.email);
    const PassV = validation.validatePass(data.password);

    if (typeof nameV === "string" && nameV.length > 1) {
      return setError(nameV);
    }
    if (typeof emailV === "string" && emailV.length > 2) {
      return setError(emailV);
    }
    if (typeof PassV === "string" && PassV.length > 2) {
      return setError(PassV);
    }
    setError('');

    const formDataBody = new FormData();
    formDataBody.append('email', data.email);
    formDataBody.append('password',data.password);
    formDataBody.append('name', data.name);
    formDataBody.append('file',data.file);
    try{
      await axios.post('http://localhost:8080/user/signup',formDataBody,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })
      navigateUser('/login');
    }catch(error){
      console.log('Something wrong happened',error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-500 via-green-500 to-pink-500 font-serif">
      <form className="bg-white p-8" onSubmit={handleSubmit}>
        <div className="text-center mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlgUtYQLmh29X34jsMTp3LWUZIJAxNODrRkEOPXIbWToqH8yqNCS95CIyBh2xzwxJYKs&usqp=CAU"
            alt="Logo"
            className="w-35 mx-auto"
          />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-500">
          Sign Up
        </h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <div className="mb-4">
          <label htmlFor="name" className="text-gray-700 block">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full border border-gray-290 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-gray-700 block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-290 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="text-gray-700 block">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full border border-gray-290 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="file" className="text-gray-700 block">
            File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            required
            accept=".jpg, .jpeg, .png"
            className="w-full border border-gray-290 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 block mx-auto mt-3"
        >
          Sign Up
        </button>

        <div className="mt-4 text-center">
          <Link
            to="/login" 
            className="text-green-500 hover:text-blue-500 hover:underline"
          >
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
}
