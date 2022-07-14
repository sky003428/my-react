import { useState } from 'react'
import CheckBox from './components/MyCheckBox'
import RadioButton from './components/MyRadioButton'

function Demo() {
  // radio - 專用元件
  const [gender2, setGender2] = useState('')
  // radio - 選項
  const genderOptions = ['男', '女', '不提供']

  // checkbox group(專用元件)
  const [likeList2, setLikeList2] = useState([])
  const fruitOptions2 = ['西瓜', '芒果', '香蕉', '龍眼']

  return (
    <>
      <h1>可控表單元素</h1>
      <h2>選項按鈕(專用元件)</h2>
      {genderOptions.map((v, i) => {
        return (
          <RadioButton
            key={i}
            value={v}
            checkedValue={gender2}
            className="form-check-input"
            setCheckedValue={setGender2}
          />
        )
      })}

      <h2>多個核取方塊(專用元件)</h2>
      {fruitOptions2.map((v, i) => {
        return (
          <CheckBox
            key={i}
            value={v}
            className="form-check-input"
            checkedValueList={likeList2}
            setCheckedValueList={setLikeList2}
          />
        )
      })}
    </>
  )
}

export default Demo
