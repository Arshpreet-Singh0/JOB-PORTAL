import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const [input, setInput] = useState({
    fullname : "",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
    file:""
  })

  const navigate = useNavigate();
  const {loading, user} = useSelector(store => store.auth);
    const dispatch = useDispatch();

  const changeEventHandler = (e)=>{
    setInput({...input, [e.target.name] : e.target.value});
  }

  const changefileHandler = (e)=>{
    setInput({...input, file : e.target.files?.[0]});
  }

  const submitHandler = async(e)=>{
    e.preventDefault();

    console.log(input);

    try {
      dispatch(setLoading(true));
      const formData = new FormData();

      formData.append("fullname", input.fullname);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("role", input.role);
      formData.append("password", input.password);
      if(input.file){

        formData.append("file", input.file);
      }

      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers : {
          "Content-Type" : "multipart/form-data",
        },
        withCredentials : true,
      })

      if(res.data.success){
        navigate("/login")
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
        toast.error(error.response.data.message)
    }
    finally{
      dispatch(setLoading(false));
    }

    
  }
  useEffect(()=>{
    console.log(user);
    
    if(user){
      navigate("/");
    }
  },[])

  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-grey-200 rounded-md p-4 my-10"
        >
          <h1 className="text-xl font-bold mb-5">Sign Up</h1>

          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" value={input.fullname} name="fullname" onChange={changeEventHandler} placeholder="e.g Arsh" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" name="email" value={input.email} onChange={changeEventHandler} placeholder="example@gmail.com" />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="number" name="phoneNumber" value={input.phoneNumber} onChange={changeEventHandler} placeholder="88888 00000" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" name="password" value={input.password} onChange={changeEventHandler} placeholder="password" />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input 
                type="radio"
                name="role" 
                value="student"
                checked = {input.role=='student'}
                onChange={changeEventHandler}
                className="cursor-pointer"/>
                <Label htmlFor="r2">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input 
                type="radio"
                name="role"
                value="recruiter"
                checked = {input.role=='recruiter'}
                onChange={changeEventHandler}
                className="cursor-pointer"/>
              </div>
              <Label htmlFor="r2">Recruiter</Label>
            </RadioGroup>

            <div className="flex items-center gap-2 ms-2">
                  <Label>Profile</Label>

                  <Input accept = "image/*" type="file" name="file" onChange={changefileHandler} className="cursor-pointer" />
            </div>
          </div>

          {
            loading ? <Button className="w-full my-4"> <Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button> : <Button tyoe="submit" className="w-full my-4">Signup</Button>
          } 
          <span>Alredy have an account? <Link to="/login" className="text-blue-600">Login</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
