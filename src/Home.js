import { useState, useEffect } from "react";
import BlogList from "./BlogList.js";

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    //npx json-server --watch data/db.json --port 8000
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then(response => {
                    if(!response.ok){
                        throw Error("couldn't fetch the data")
                    }
                    return response.json()
                })
                .then(data => {
                    setBlogs(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch((err) =>{
                    setIsPending(false)
                    setError(err.message)
                })
        }, 750)
    }, [])

    return (
        <div className="home">
            { error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;