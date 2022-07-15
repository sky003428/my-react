import { useState } from 'react'

function HTML5Form(props) {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    // 先阻擋預設送出行為
    e.preventDefault()

    // 這裡可以得到目前輸入的值
    // 第一種方式: 從狀態得到
    console.log(userData)

    // 第二種方式: 用FormData物件
    const formData = new FormData(e.target)

    console.log(
      formData.get('fullName'),
      formData.get('email'),
      formData.get('password')
    )

    // 作更多驗証

    // 送到伺服器(fetch/ajax)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>姓名</label>
        <input
          type="text"
          name="fullName"
          required
          value={userData.fullName}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <label>密碼</label>
        <input
          type="text"
          name="password"
          required
          minLength={6}
          value={userData.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default HTML5Form
