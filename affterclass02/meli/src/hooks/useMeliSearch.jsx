import { useState } from "react"

const useMeliSearch = () => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    const searchResults = async (query) => {
        setLoading(true)
        try{
            const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            const data = await res.json()
            //console.log(data.results)
            setResults(data.results)
        }catch(error){
            console.error(error)
        } finally {
            setLoading(false)
        }

    }

    return {results, searchResults, loading}
}

export default useMeliSearch;
