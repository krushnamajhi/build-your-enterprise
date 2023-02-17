import React, { useState } from 'react'
import styles from './../css/login.module.css'
import Link from 'next/link'

export default function SignUp() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    emailid: "",
    gender: "",
    password: ""
  })

  function handleInput(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  function handleSubmit() {
    alert(JSON.stringify(userData))
  }

  return (
    <center style={{ padding: "100px" }}>
      <form className={styles.form} method='POST' action='#' onSubmit={handleSubmit}>
        <center><div><h2 className={styles.h2}>Create Account</h2></div></center>
        <div className={styles.formField}>
          <label for="firstname">Firstname: </label>
          <input name="firstname" onChange={handleInput} value={userData.username} />
        </div>
        <div className={styles.formField}>
          <label for="lastname">Lastname: </label>
          <input name="lastname" onChange={handleInput} value={userData.lastname} />
        </div>
        <div className={styles.formField}>
          <label for="emailid">Email Id: </label>
          <input name="emailid" type='email' onChange={handleInput} value={userData.emailid} />
        </div>
        <div className={styles.formField}>
          <label for='gender'>Gender: </label>
          <input type="radio" id="html" name="gender"  onChange={handleInput} value={"Male"} />
          <input type="radio" id="html" name="gender"  onChange={handleInput} value={"Female"} />
        </div>
        <div className={styles.formField}>
          <label for="password">Password: </label>
          <input name="password" type='password' onChange={handleInput} value={userData.password} />
        </div>
        <div className={styles.formField}>
        <button className={styles.button} type='submit'>Sign up</button>
      </div>
        <div className={styles.link}>
          Already Have an Account? <Link href="/login">Login here</Link>
        </div>        
      </form>
    </center>
  )
}
