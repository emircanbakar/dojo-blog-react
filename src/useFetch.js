import { useState, useEffect } from "react"

//"npx json-server --watch data/db.json --port 8000"
const useFetch = (url) =>{

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if(!response.ok){
                        throw Error("couldn't fetch the data")
                    }
                    return response.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch((err) =>{
                    setIsPending(false)
                    setError(err.message)
                })
        }, 750)
    }, [])

    return {data, isPending, error}
}

export default useFetch;