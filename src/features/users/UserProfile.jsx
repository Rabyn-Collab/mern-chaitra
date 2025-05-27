import React from 'react'
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from './userApi.js'
import { Formik } from 'formik';
import { Button, Input } from '@material-tailwind/react';
import toast from 'react-hot-toast';

export default function UserProfile({ user }) {
  const { data, isLoading, error } = useGetUserProfileQuery(user.token);

  const [updateUser, { isLoading: updateLoading }] = useUpdateUserProfileMutation();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.data?.message || error.error}</h1>;


  return (
    <div>

      <Formik
        initialValues={{
          username: data.username,
          email: data.email
        }}

        onSubmit={async (val) => {
          try {
            await updateUser({
              body: {
                username: val.username,
                email: val.email
              },
              token: user.token
            }).unwrap();
            toast.success('Profile Updated');
          } catch (err) {
            toast.error(err.data.message || err.error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className='space-y-5'>

            <div>
              <Input
                name="username"
                label='Username'
                onChange={handleChange}
                value={values.username}
                placeholder="Enter Username"

              />
            </div>
            <div>
              <Input
                name="email"
                label='Email'
                onChange={handleChange}
                value={values.email}
                placeholder="Enter Email"
              />
            </div>
            <Button
              type='submit'
              disabled={updateLoading}
              loading={updateLoading}
            >Update</Button>

          </form>
        )}
      </Formik>

    </div>
  )
}
