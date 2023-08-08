import { useState } from "react";


const Home = () => {

    // let name = "Emir"
    // const [name , setName] = useState("Emir")
    // const [age, setAge] = useState(25)
    // const handleClick = () => {
    //     setName("can")
    //     setAge(30)
    // }
    // const handleClickAgain = (name) => {
    //     console.log("hi " + name)
    // }

    const [blogs, setBlogs] = useState([
        { title: "My website", body: "lorem ipsum....", author: "emir", id: 1 },
        { title: "React lessons", body: "lorem ipsum....", author: "can", id: 2 },
        { title: "Being a developer intern", body: "lorem ipsum....", author: "bakar", id: 3 }
    ])

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id } >
                    <h2> {blog.title} </h2>
                    <p> Written by {blog.author} </p>
                </div>
        
            ))}



            {/* <p>{ name } is {age} years old. </p>
            <button onClick={handleClick} >Click Me</button> */}
            {/* <button onClick={() => {
                handleClickAgain("emir")
            }} >Click Me Again</button> */}
        </div>
    );
}

export default Home;