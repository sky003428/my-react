import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 版面頁面元件
import Layout from './layouts/Layout'
// 其它子頁面
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import NoFound from './pages/NoFound'

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* index代表此路由中的預設子頁 */}
          <Route index element={<Home />} />
          {/* 其它子頁面 */}
          <Route path='page1' element={<Page1 />} />
          <Route path='page2' element={<Page2 />} />
          <Route path='page3' element={<Page3 />} />
          {/* 404未找到的頁面路由，需放在最下方 */}
          <Route path='*' element={<NoFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main
