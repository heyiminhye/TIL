import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
});

const Login = () => {
  //   const useform = useForm();
  //   console.log(useform); // 사용할 수 있는 API

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data: any) => {
    console.log({ data });
    reset();
  };
  return (
    <form className="formlo" onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>로그인하세요.</h2>
      <br />

      <input
        {...register("email")}
        placeholder="이메일을 입력하세요."
        type="email"
        required
      />
      <p>{errors.email?.message && "이메일 형식을 확인하십시오."}</p>
      <br />

      <input
        {...register("password")}
        placeholder="비밀번호를 입력하세요."
        type="password"
        required
      />
      <p>{errors.password?.message && "비밀번호를 다시 입력해주세요."}</p>
      <br />

      <button type="submit">로그인</button>
    </form>
  );
};

export default Login;
