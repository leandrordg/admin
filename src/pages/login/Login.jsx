import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <h1 className="loginTitle">Fazer Login</h1>
        <form className="loginForm">
          <div className="loginInputField">
            <TextField id="email" label="Email" variant="outlined" />
          </div>
          <div className="loginInputField">
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Senha
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Senha"
              />
            </FormControl>
          </div>
          <div className="loginInputField">
            <span className="loginLink">Esqueci minha senha</span>
            <Link to="/signup" className="link">
              <span className="loginLink">Criar uma conta</span>
            </Link>
          </div>
          <button className="loginButton">Entrar</button>
        </form>
      </div>
    </div>
  );
}
