import React, { useContext } from "react";
import { Appcontext } from "../context/appcontext";
import Spinner from "./spinnner";

const Blogs = () => {
    const { post, loading } = useContext(Appcontext)
    return (
        <div className="w-11/12 max-w-[670px] py-8 h-screen flex-col gap-y-7 mt-[66px] mb-[70px] flex justify-center items-center">
            {
                loading ?
                    (<Spinner/>) :
                    (post.length === 0 ? (
                        <div>
                            <p>No Post found </p>
                        </div>) :
                         (post.map((post) => (
                         <div key={post.id}>
                            <p className="font-bold tex-lg ">{post.title}</p>
                            <p className="tex-sm mt-[4px]">By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span></p>
                            <p className="text-sm mt-[4px]">Posted on {post.date}</p>
                            <p className="text-md mt-[14px]">{post.content}</p>
                            <div className="gap-x-3 flex ">
                                {post.tags.map((tag, index) => {
                                    return <span className="text-blue-700 text-xs mt-[5px] underline font-bold " key={index}>{`#${tag}`}</span>
                                })}
                            </div>
                        </div>))))
            }
        </div>
    )
}
export default Blogs