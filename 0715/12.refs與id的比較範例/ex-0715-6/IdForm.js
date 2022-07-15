import React from 'react'

function IdForm() {
  return (
    <>
      <h1>IdForm</h1>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          document.getElementById('my-input').focus()
        }}
      >
        Focus
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').blur()
        }}
      >
        Blur
      </button>
      <button
        onClick={() => {
          alert(document.getElementById('my-input').value)
        }}
      >
        Show value
      </button>
    </>
  )
}

export default IdForm
