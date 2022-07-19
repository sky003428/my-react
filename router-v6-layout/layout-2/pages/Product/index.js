import { Outlet, useParams } from 'react-router-dom'
// import List from './List'
// import Detail from './Detail'

function Product() {
  /* 因為使用了巢狀路由後，Detail是有id的outlet，而List是沒有id的
     這是由Routes表中的結構設定決定。*/

  // 相當於下面的情況
  // const { productId } = useParams()
  // return <>{productId ? <Detail /> : <List />}</>

  return (
    <>
      {/* 這裡可以依需求排版 */}
      <h1>Product Page</h1>
      <Outlet />
    </>
  )
}

export default Product
