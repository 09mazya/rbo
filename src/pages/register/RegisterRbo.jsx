import React, { useState } from 'react';

import classes from "./RegistorRbo.module.css"
const RegisterRbo = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  return (
    <div className={classes.app}>
      <form className={classes.form}>
        <h1>Авторизация</h1>
        <input
          type="text"
          name="email"
          placeholder="Email...."
        />
        <input
          type="text"
          name="password"
          placeholder="Password...."
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}

export default RegisterRbo;
