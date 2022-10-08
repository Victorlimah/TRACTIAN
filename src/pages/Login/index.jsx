import * as S from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../services/api/userService";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ login: "", password: "" });

  return (
    <S.Container>
      <S.Box>
        <S.Title>TRACTIAN</S.Title>
        <S.Form onSubmit={(e) => submitLogin(e)}>
          <S.Input
            required
            type="text"
            placeholder="Login"
            value={values.login}
            onChange={(e) => setValues({ ...values, login: e.target.value })}
          />
          <S.Input
            required
            type="password"
            placeholder="Senha"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <S.Button type="submit">Entrar</S.Button>
        </S.Form>
      </S.Box>
    </S.Container>
  );

  async function submitLogin(e) {
    e.preventDefault();
    try{
      console.log(values);
      const token = await login(values);
      console.log(token);
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login ou senha inválidos",
      });
    }
  }
}
