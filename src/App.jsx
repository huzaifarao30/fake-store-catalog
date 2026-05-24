import { useEffect, useState } from "react"


function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error('Failed to fetch data.')
        }
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800">Product Catalog</h1>
      {loading && <p className="text-xl text-blue-600 font-semibold animate-pulse">Loading from API...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
          products.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
              <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
              <h2 className="text-sm font-bold text-gray-700 text-center line-clamp-2">{product.title}</h2>
              <p className="text-lg font-bold text-green-600 mt-auto pt-2">${product.price.toFixed(2)}</p>
            </div>
          ))
          }
        </div>
      )}
    </div>
  )
}

export default App