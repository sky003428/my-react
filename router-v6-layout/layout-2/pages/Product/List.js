import { Link } from 'react-router-dom'

import './styles/Product.css'
import products from '../../data/product.json'

function List() {
  return (
    <>
      <div className='product'>
        <h1>Product List</h1>
        <div className='container'>
          {products.map((v, i) => {
            return (
              <div class='card' key={v.id}>
                <img src={v.image} className='img' alt='' />
                <div class='content'>
                  <h3>
                    <Link to={`/product/${v.id}`}>{v.name}</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h4>Price: {v.price}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default List
