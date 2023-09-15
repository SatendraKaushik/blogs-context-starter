import Header from "./component/Header";
import Pagination from "./component/pages";
import Blogs from "./component/bolgs";
import { useContext, useEffect } from "react";
import { Appcontext } from "./context/appcontext";
import "./App.css"

export default function App() {
  const {fetchBlog}= useContext(Appcontext)
  useEffect(()=>{
fetchBlog();
  },[])
  return (
  <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center overflow-y-hidden">
<Header/>
<Blogs/>
<Pagination/>


  </div>)
}
