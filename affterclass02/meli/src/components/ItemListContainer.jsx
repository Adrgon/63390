import { useState } from "react"
import useMeliSearch from "../hooks/useMeliSearch"
import ItemList from "./ItemList"


const ItemListContainer = () => {
  const {results, searchResults, loading} = useMeliSearch()
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(query) searchResults(query)
  }
  //console.log(results)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-12">
          Buscador de productos
        </h1>
        <form onSubmit={handleSubmit} className="flex justify-center mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca tu producto"
            className="w-full max-w-md border border-gray-300 rounded p-3 focus:outline-none focus:ring-2"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rouded-r-lg font-semibold"
          >
            Buscar
          </button>
        </form>
        {loading ? (
          <p className="text-center text-gray-500">Cargando productos...</p>
        ) : (
          <ItemList products={results} />
        )}
        {!loading && results.length === 0 && (
          <p className="text-center text-gray-500">No se encontraron productos para la busqueda</p> 
        )}
      </div>
    </div>
  );
}

export default ItemListContainer
