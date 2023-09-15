import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
export const Appcontext = createContext();
export default function AppcontextProvider({ children }) {
    const [loading, setloading] = useState(false);
    const [post, setpost] = useState([])
    const [page, setpage] = useState(1)
    const [totalpage, settotalpage] = useState(null)
    async function fetchBlog(page = 1) {
        setloading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            setpage(data.page)
            setpost(data.posts)
            settotalpage(data.totalPages)
        }
        catch (error) {
            console.log("Error in fetching data")
            setpage(1);
            setpost([])
            settotalpage(null)

        }
        setloading(false)
    }
    function handlepagechange(page) {
        setpage(page);
        fetchBlog(page)
    }
    const value = {
        post,
        setpost,
        loading,
        setloading,
        page,
        setpage,
        totalpage,
        settotalpage,
        fetchBlog,
        handlepagechange
    }
    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>
}