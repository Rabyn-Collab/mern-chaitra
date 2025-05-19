import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useUserLoginMutation } from "./userApi.js";
import toast from "react-hot-toast";

export default function Login() {
  const [loginUser, { isLoading }] = useUserLoginMutation();
  return (
    <div className="max-w-[400px]">


      <Formik
        initialValues={{
          email: '',
          password: ''
        }}

        onSubmit={async (val) => {
          try {

            await loginUser(val).unwrap();
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
            <div>
              <Input
                name="password"
                value={values.password}
                onChange={handleChange}
                label="Password" />
            </div>

            <Button loading={isLoading} type="submit">Submit</Button>

          </form>
        )}
      </Formik>

    </div>
  )
}
