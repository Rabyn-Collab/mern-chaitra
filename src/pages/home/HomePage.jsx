import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';


const valSchema = Yup.object({
  username: Yup.string().min(5).required(),
  gender: Yup.string().required(),
  habits: Yup.array().min(1).required(),
  country: Yup.string().required(),
  message: Yup.string().min(10).max(200).required()
});

export default function HomePage() {
  return (
    <div className='p-5 max-w-[450px]'>

      <Formik

        initialValues={{
          username: '',
          gender: '',
          habits: [],
          country: '',
          message: ''
        }}

        onSubmit={(val) => {
          console.log(val);
        }}

        validationSchema={valSchema}



      >

        {({ handleChange, handleSubmit, errors, values, setFieldValue, touched }) => (
          <form onSubmit={handleSubmit} className='space-y-5'>

            <div>
              <Input
                onChange={handleChange}
                name='username'
                label='Username'
                value={values.username}
              />
              {errors.username && touched.username && <p className='text-pink-400'>{errors.username}</p>}
            </div>

            <div>
              <Typography>Select Gender</Typography>
              <div className="flex gap-10">
                <Radio
                  onChange={handleChange}
                  name="gender"
                  label="Male"
                  value={'male'}
                  color='red' />
                <Radio
                  onChange={handleChange}
                  name="gender"
                  label="Female"
                  value={'female'}
                  color='purple' />
              </div>

              {errors.gender && touched.gender && <p className='text-pink-400'>{errors.gender}</p>}

            </div>


            <div>
              <Typography>Select Your Habits</Typography>
              <div className="flex  gap-4">
                <Checkbox
                  value={'Singing'}
                  color="blue"
                  onChange={handleChange}
                  name='habits'
                  label='Singing' />
                <Checkbox
                  onChange={handleChange}
                  value={'Dancing'}
                  color="red"
                  name='habits'
                  label='Dancing' />
                <Checkbox
                  onChange={handleChange}
                  name='habits'
                  value={'Coding'}
                  color="green" label='Coding' />

              </div>
              {errors.habits && touched.habits && <p className='text-pink-400'>{errors.habits}</p>}
            </div>

            <div>
              <Select
                name='country'
                onChange={(e) => setFieldValue('country', e)}
                label="Select Your Country">
                <Option value='Nepal'>Nepal</Option>
                <Option value='India'>India</Option>
                <Option value='China'>China</Option>

              </Select>
              {errors.country && touched.country && <p className='text-pink-400'>{errors.country}</p>}
            </div>

            <div>
              <Textarea
                name='message'
                onChange={handleChange}
                value={values.message}
                label='type a message'></Textarea>
              {errors.message && touched.message && <p className='text-pink-400'>{errors.message}</p>}
            </div>





            <Button type='submit'>Submit</Button>

          </form>
        )}

      </Formik>

    </div>
  )
}
