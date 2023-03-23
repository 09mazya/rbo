import React from 'react';
import { Link } from "react-router-dom";

import classes from "./RegistorRbo.module.css"
const RegisterRbo = () => {
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
        <Link to="/profile">
          <button type="submit">Войти</button>
        </Link>
      </form>
    </div>
  )
}

export default RegisterRbo;
