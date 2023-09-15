import React, { useContext } from "react";
import { Appcontext } from "../context/appcontext";
const  Pagination=()=>{
    const {page,handlepagechange,totalpage}=useContext(Appcontext)
return (
    <div className="w-full flex justify-center items-center fixed bottom-0  bg-white border-2">
        <div className="flex justify-between w-11/12 max-w-[670px] py-2">
            <div className="flex gap-x-2">
            {page>1 &&
     (   <button  className="rounded-md border-2 px-4 py-1 "onClick={()=>handlepagechange(page-1)}>Previous</button>)
}
{page<totalpage&& 
(<button  className="rounded-md border-2 px-4 py-1 "onClick={()=>handlepagechange(page+1)}>Next</button>)}

            </div>
            <p className="font-bold text-sm ">
    Page {page} of {totalpage}
</p>
       
</div>
    </div>
)
}
export default Pagination