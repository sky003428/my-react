import { useRef } from 'react'

function RefsForm() {
  const inputRef = useRef(null)

  return (
    <>
      <h1>RefsForm</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        Focus
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        Blur
      </button>
      <button
        onClick={() => {
          alert(inputRef.current.value)
        }}
      >
        Show value
      </button>
    </>
  )
}

export default RefsForm
