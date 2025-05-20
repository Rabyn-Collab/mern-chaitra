import { Button, IconButton, Input, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useUserLoginMutation } from "./userApi.js";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "./userSlice.js";

export default function Login() {
  const [loginUser, { isLoading }] = useUserLoginMutation();
  const [pass, setPass] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="max-w-[400px]">


      <Formik
        initialValues={{
          email: '',
          password: ''
        }}

        onSubmit={async (val) => {
          try {

            const response = await loginUser(val).unwrap();
            dispatch(setUser(response));
            toast.success('Login Success');


          } catch (err) {

            toast.error(err.data.message || err.error);
          }

        }}
      >
        {({ handleChange, values, errors, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="email"
                value={values.email}
                onChange={handleChange}
                label="Email" />
            </div>

            <div className="relative flex w-full ">
              <Input
                type={pass ? 'text' : 'password'}
                label="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <IconButton
                onClick={() => setPass(!pass)}
                size="lg" variant="text" className="!absolute right-1 bottom-[-4px] ">
                <i className={`${pass ? "fas fa-unlock" : "fas fa-lock"}`} />
              </IconButton>

            </div>

            <Button loading={isLoading} type="submit">Submit</Button>

          </form>
        )}
      </Formik>

      <Typography color="gray" className="mt-9 text-center font-normal">
        Don't have an account ?
        <Button
          onClick={() => nav('/register')}
          variant="text" className="font-medium text-gray-900 px-4">
          Sign Up
        </Button>
      </Typography>

    </div>
  )
}
