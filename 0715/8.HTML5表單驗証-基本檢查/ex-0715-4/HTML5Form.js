function HTML5Form(props) {
  return (
    <>
      <form>
        <label>姓名</label>
        <input type="text" name="fullName" required />
        <br />
        <label>Email</label>
        <input type="email" name="email" required />
        <br />
        <label>密碼</label>
        <input type="text" name="password" required />
        <br />
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default HTML5Form
