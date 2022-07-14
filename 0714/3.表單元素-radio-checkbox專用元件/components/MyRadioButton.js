import React from 'react'

function MyRadioButton(props) {
  const { value, checkedValue, setCheckedValue, ...otherProps } = props

  console.log(otherProps)

  return (
    <div className="form-check">
      <input
        type="radio"
        value={value}
        checked={checkedValue === value}
        onChange={(e) => {
          setCheckedValue(e.target.value)
        }}
        {...otherProps}
      />
      <label>{value}</label>
    </div>
  )
}

export default MyRadioButton
