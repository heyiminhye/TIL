import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type UserSubmitForm = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

const Signup: React.FC = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>이름</label>
          <input
            type="text"
            {...register("fullname")}
            className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">
            {errors.fullname?.message && "이름을 입력하세요."}
          </div>
        </div>

        <div className="form-group">
          <label>아이디</label>
          <input
            type="text"
            {...register("username")}
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">
            {errors.username?.message && "아이디를 입력하세요."}
          </div>
        </div>

        <div className="form-group">
          <label>이메일</label>
          <input
            type="text"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">
            {errors.email?.message && "이메일 형식을 확인하십시오."}
          </div>
        </div>

        <div className="form-group">
          <label>비밀번호</label>
          <input
            type="password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">
            {errors.password?.message && "비밀번호를 입력하세요."}
          </div>
        </div>
        <div className="form-group">
          <label>비밀번호 확인</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message && "비밀번호가 일치하지 않습니다."}
          </div>
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            {...register("acceptTerms")}
            className={`form-check-input ${
              errors.acceptTerms ? "is-invalid" : ""
            }`}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            이용약관
          </label>
          <div className="invalid-feedback">
            {errors.acceptTerms?.message && "이용약관에 동의해주십시오."}
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            가입신청
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
