import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function LoginPage() {
    const [formData, setFormData]=useState({
        email:"",
        password:"",
    });
const navigate = useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prevData=>({
            ...prevData,
            [name]:value,
        })))
    }
    const handleClickLogin = async () => {
      const response = await axios.post('http://localhost:8080/user/login');
      localStorage.setItem('token', response.data.token);
      console.log("Logging in with:", formData);
      navigate('/');
    }


  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-500 via-green-500 to-pink-500 font-serif">
        <form className="bg-white p-8" onSubmit={handleClickLogin}>
            <div className="text-center mb-6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlgUtYQLmh29X34jsMTp3LWUZIJAxNODrRkEOPXIbWToqH8yqNCS95CIyBh2xzwxJYKs&usqp=CAU" alt="Logo" className="w-35 mx-auto" />
            </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-500">
          Login
        </h2>
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
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full border border-gray-290 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className=" bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 block mx-auto mt-3">
          Login
        </button>
        <div className="mt-4 text-center">
          <button className="text-green-500 hover:text-blue-500 hover:underline">
            Forgot Password?
          </button>
        </div>
        <div className="mt-4 text-center">
          <button className="text-green-500 hover:text-blue-500 hover:underline">
            
            <Link to={'/signup'}>New User? Sign Up</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
