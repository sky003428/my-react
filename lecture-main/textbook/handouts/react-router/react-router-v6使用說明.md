# React Router 使用說明

註：本教學中以 React Router v6，由於剛發佈不久(2021.11)，版本發佈還在跳動非常快，目前還有不少 bugs 或與前一版的相當有不相容性。

註：React Router 目前版本(v5.x)區分為給網站應用 React 開發使用的 react-router-dom，以及給手機應用 React Native 開發使用的 react-router-native，文件參考[React Router](https://reactrouter.com/docs/en/v6)

註：網站應用使用的導覽方式是路由的概念，但手機開發的導覽方式實際上是堆疊的結構，兩者不太一樣。

## 安裝 `react-router-dom` 模組

在終端機裡，對應專案的根目錄，輸入以下的指令:

```sh
yarn add react-router-dom
```

或

```sh
npm install react-router-dom
```

## React Router 使用基礎說明

### 應用的最外層元件必須是 BrowserRouter 元件

> 註：一般情況就是 App 這個元件(也可用應用進入檔案 index.js，但推薦已熟悉的開發者使用)，

注意一整個應用只能使用一個 Router 元件，它直接由 `react-router-dom` 模組導入，網站應用程式的客戶端路由時，一般都是用 `BrowserRouter` 作為 Router 元件。必需位於你的應用的最外層(最上層的元件)，例如下面的最基本的套用範例：

```js
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React from 'react'

// 以下為各頁面元件
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import ProductMen from './pages/ProductMen'

function App() {
  return (
    <BrowserRouter>
      {/* 連結到各頁面連結 */}
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
      <Link to='product'>Product</Link>
      <Link to='product/men'>ProductMen</Link>
      {/* 路由表 */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='product' element={<Product />} />
        <Route path='product/men' element={<ProductMen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

> 註：由於最上層元件要求一定要是 Router 元件，與一些其它有類似要求的套件例如 Redux 可能會有整合上的問題，這部份的解決方案請參考官方相關的文件。

### 用 Routes 與 Route 元件建立路由表

Routes 與 Route 元件是使用來建立路由的對照表，這個元件的可設置屬性很多，可以應用於各種應用情況。通常位置都是在你的應用的最上層元件的 Router 元件的最下面一段 JSX 碼，請見上一節的範例。

Routes 元件通常會包裹 Route 元件，因為路由表的使用方式是用完整對照符合(match)，Routes 會從上到下尋找最近的一個，也只會使用一個。

### 以 Link 取代 a

> 注意：使用`a`與`href`有可能會導致頁面刷新，元件會重新回復初始狀態，導致應用程式的運作失常，所以請儘可能用 Link 元件

`a`元素與`href`屬性是網站應用中的連結網頁用元素，Link 元件是 React Router 中用來取代 a 的元件。

原本的連結應該是像下面這樣：

```js
<a href='/about'>關於我們</a>
```

改為 Link 元素後會像下面這樣：

```js
<Link to='about'>關於我們</Link>
```

Link 元件中除了可以像 a 元素中，使用 id、title、className 等屬性外，to 屬性中可以使用物件的定義方式，來定義這個連結路徑的參數值，以下是它的定義：

```ts
declare function Link(props: LinkProps): React.ReactElement

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  replace?: boolean
  state?: any
  to: To
  reloadDocument?: boolean
}

type To = string | Partial<Path>
```

`Link` 元件的 `To` 屬性值不需要使用 `/` 開頭，使用 `..` 代表向上一層，類似於 `cd..`。

`NavLink` 是 `Link` 元件的特別版本，專用於導覽列選單使用，差異是在於多了一個代表是否有被點亮的額外屬性，如以下的範例:

```js
<NavLink
  to='tasks'
  className={({ isActive }) => (isActive ? activeClassName : undefined)}
>
  Tasks
</NavLink>
```

### React Router 三個重要的屬性值

使用 React Router 後會綁入使用的元件的 props 以下三個相關的屬性值：

- match: 主要要得到不同路徑的參數值
- history: 對於瀏覽器書籤、前後移動的處理方法
- location: 目前所在的位置(物件值)，實際上為 history 的其一屬性

### Hooks(勾子)

> 註 1: 只能用於函式型元件。類別型元件要使用 HOC(見下面 `withRouter`)

#### useNavigate

> 註: 這是新的 API，但在 5.x 元件是使用 `useHistory` 作類似的事

```jsx
import { useNavigate } from 'react-router-dom'

function Product(props) {
  const navigate = useNavigate()

  return (
    <>
      <h1>Product</h1>
      <button
        onClick={() => {
          navigate('/about', { replace: true })
        }}
      >
        到about頁
      </button>
      <button
        onClick={() => {
          navigate(-1)
        }}
      >
        返回上一頁
      </button>
    </>
  )
}

export default Product
```

比較以下三者的功能差異:

- `navigate('/about', { replace: true })`
- `navigate('/about')`
- `navigate('about')`

#### useLocation

`location` 代表目前的頁面的路徑位置，主要使用於:

- 頁面位置有變化時的偵測(尤其是同一頁面元件重覆套用於不同內容時)
- 網址上的搜尋字串應用

主要是下面與兩個屬性值的搭配使用:

- `location.pathname` - 目前的路徑，開始於`/`到`?`
- `location.search` - 目前的搜尋字串，開始於`?`到`key=value`的成對字串全部

```jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ProductMen(props) {
  let location = useLocation()

  useEffect(() => {
    console.log(location.search)
  }, [location])

  return (
    <>
      <h1>ProductMen</h1>
    </>
  )
}

export default ProductMen
```

#### useParams

主要使用於獲取動態的網址上的參數，例如`http://abc.com/member/123`要獲取`123`使用，通常會搭配巢狀路由使用。

路由表範例:

```jsx
<BrowserRouter>
  {/* 連結到各頁面連結 */}
  <Link to='member'>Member</Link>
  {/* 路由表 */}
  <Routes>
    <Route path='member'>
      {/* 動態網址參數頁面 */}
      <Route path=':memberId' element={<Memeber />} />
      {/* 預設頁面 */}
      <Route index element={<Memeber />} />
    </Route>
  </Routes>
</BrowserRouter>
```

Member 頁面元件:

```js
import { useParams } from 'react-router-dom'

function Memeber(props) {
  let { memberId } = useParams()

  return (
    <>
      <h1>Memeber</h1>
      <p>memberId: {memberId}</p>
    </>
  )
}

export default Memeber
```

### withRouter 方法(舊語法 & 補充)

> 註：函式型/類別型元件通用的方式

> 注意：此 HOC 方法在 v6 版要由開發者自行包裝，參考[FAQ](https://reactrouter.com/docs/en/v6/faq#what-happened-to-withrouter-i-need-it)與[Does v6 drop support for class components?](https://github.com/remix-run/react-router/issues/8146)

深層的子元件要得到 React Router 的屬性值時都要使用。要綁入 props 三個屬性值(match, history, loaction)必定要加上。

範例:

```js
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}

function Product(props) {
  console.log(props.router)

  return (
    <>
      <h1>Product</h1>
      <h3>{props.match.params.id}</h3>
    </>
  )
}

export default withRouter(Product)
```

### 參考：靜態路由表

> 注意: 使用靜態路由時，因無法從 props 傳入動態的狀態值，需搭配全域狀態套件(redux, mobx, Recoil)或 Context 使用

另一種針對複雜的、具有規模的應用的路由表設定方式，是先使用一個物件陣列先定義好，然後再用迴圈或 map 方法輸出到同一位置，範例如下：

