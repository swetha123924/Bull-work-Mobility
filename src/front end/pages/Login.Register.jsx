import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
export default function LoginRegister(){
    const[isLogin,setIsLogin]=useState(true);
    const[formData,setFormData]=useState({username:'',email:'',password:'',role:'user'});
    const navigate=useNavigate();
    const toggleMode=()=>setIsLogin(!isLogin);
    const handleChange=(e)=>{setFormData({...formData,[e.target.name]:e.target.value});};
    const handleSubmit=async(e)=>{e.preventDefault();
    const endpoint=isLogin?'/api/auth/login':'/api/auth/register';
    try{
        const response=await fetch(`http://localhost:3000${endpoint}`,
        {method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
    });
    const data=await response.json();
    if(!response.ok){
        throw new Error(data.message||'Something went wrong');
    }alert(data.message);
    if(isLogin){
        localStorage.setItem('token',data.token);
        localStorage.setItem('email',formData.email);
        localStorage.setItem('user',JSON.stringify(data.user));
        console.log('Login Successful');
        console.log('Token:',data.token);
        console.log('User:',data.user);
        navigate('/');
    }else{
        setIsLogin(true);
    }}catch(err){alert(err.message);}};
    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{isLogin?'Login':'Register'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin&&(
                        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>)}
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                    {!isLogin&&(
                        <select name="role" value={formData.role} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg bg-white">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    )}
                    <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">{isLogin?'Login':'Register'}</button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">{isLogin?"Don't have an account?":'Already have an account?'} 
                <button onClick={toggleMode} className="text-indigo-600 hover:underline font-semibold">{isLogin?'Register here':'Login here'}</button></p>
            </div>
        </div>
    );
}
