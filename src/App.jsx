import { useEffect, useState } from "react"


function App() {
  const [products , setProducts] = useState([])
  const [loading , setLoading] = useState(true)
  const [error , setError] = useState(null)

  useEffect(()=>{
    const fetchProducts = async ()=>{
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()

      console.log(data)
      
      setProducts(data)
      setLoading(false)
    }

    fetchProducts()
  }, [])


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800">Product Catalog</h1>
      <div className="mt-8 text-xl">
        <p>Is the app loading right now? {loading ? "Yes..." : "NO!"}</p>
        <p>How many products are in memory? {products.length}</p>
      </div>
    </div>
  )
}

export default App