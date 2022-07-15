import { useState } from 'react'

function MultipleInput() {
  const [userData, setUserData] = useState({
    fullName: '',
    phone: '',
    email: '',
  })

  const handleChange = (e) => {
    // console.log(e.target.type, e.target.name, e.target.value)
    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <label>姓名</label>
      <input
        name="fullName"
        type="text"
        value={userData.fullName}
        onChange={handleChange}
      />
      <br />
      <label>電話</label>
      <input
        name="phone"
        type="text"
        value={userData.phone}
        onChange={handleChange}
      />
      <br />
      <label>Email</label>
      <input
        name="email"
        type="text"
        value={userData.email}
        onChange={handleChange}
      />
    </>
  )
}

export default MultipleInput
