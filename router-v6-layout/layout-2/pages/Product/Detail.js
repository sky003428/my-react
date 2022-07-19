import { Link, useParams } from 'react-router-dom'

import './styles/Product.css'
import products from '../../data/product.json'
import { useState } from 'react'
import { useEffect } from 'react'

function Detail() {
  const [product, setProduct] = useState({
    id: 0,
    name: '',
    category: '',
    image: '',
    price: 0,
  })

  const { productId } = useParams()

  useEffect(() => {
    //getProduct
    const p = products.find((v, i) => v.id === Number(productId))

    if (p) {
      setProduct(p)
    }
  }, [])

  return (
    <div className='product detail'>
      <h1>Product Detail</h1>
      <h2>{product.name}</h2>
      <img src={product.image} alt='' className='detail-img' />
      <h3>Price: {product.price}</h3>
      <hr />
      <Link to='/product'>Back to Product</Link>
    </div>
  )
}
export default Detail
