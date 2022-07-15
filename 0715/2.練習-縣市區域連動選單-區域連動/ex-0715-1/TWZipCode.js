import { useState } from 'react'

function TWZipCode() {
  // 範例資料
  const counties = ['台北市', '桃園市']
  const townships = [
    ['中正區', '大同區', '中山區'],
    ['中壢區', '平鎮區', '龍潭區'],
  ]

  // 代表目前被選中的縣市的索引值
  // 注意資料類型都是數字(索引值是數字)
  // -1代表目前沒有選中任何的陣列中的值
  const [countryIndex, setCountryIndex] = useState(-1)

  return (
    <>
      <h1>台灣縣市區域連動下拉選單</h1>
      <select
        value={countryIndex}
        onChange={(e) => {
          // 注意e.target.value為字串類型(由網頁上傳入都是字串值)
          // 為了保持countryIndex(state狀態)的資料類型都一致相同，所以要轉為數字
          setCountryIndex(Number(e.target.value))
        }}
      >
        <option value="-1">請選擇縣市</option>
        {counties.map((v, i) => {
          return (
            <option key={i} value={i}>
              {v}
            </option>
          )
        })}
      </select>
      <select>
        <option>請選擇區域</option>
        {/* 當有選擇縣市(countryIndex >)時才要作map，呈現其它的區域選項 */}
        {countryIndex > -1 &&
          townships[countryIndex].map((v, i) => {
            return <option key={i}>{v}</option>
          })}
      </select>
    </>
  )
}

export default TWZipCode
