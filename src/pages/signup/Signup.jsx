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
import "./signup.css";

export default function Signup() {
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
    <div className="signup">
      <div className="signupWrapper">
        <div className="signupTitleItens">
          <h1 className="signupTitle">Criar conta</h1>
          <span className="signupSubTitle">
            Faça sua conta em apenas alguns segundos..
          </span>
        </div>
        <form className="signupForm">
          <div className="signupInputField">
            <TextField id="name" label="Nome Completo" variant="outlined" />
          </div>
          <div className="signupInputField">
            <TextField id="user" label="Usuário" variant="outlined" />
          </div>
          <div className="signupInputField">
            <TextField id="email" label="Email" variant="outlined" />
          </div>
          <div className="signupInputField">
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="password">Senha</InputLabel>
              <OutlinedInput
                id="password"
                type={values.showPassword ? "text" : "password"}
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
          <div className="signupInputField">
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="cpassword">Confirmar senha</InputLabel>
              <OutlinedInput
                id="cpassword"
                type={values.showPassword ? "text" : "password"}
                label="Confirmar senha"
              />
            </FormControl>
          </div>
          <div className="signupInputField">
            <span className="signupLink">
              Ao criar minha conta, estou de acordo com as{" "}
              <strong>politicas de privacidade</strong> e{" "}
              <strong>termos de uso</strong>.
            </span>
          </div>
          <button className="signupButton">Criar</button>
          <Link to="/login" className="link">
            <span>Fazer login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
