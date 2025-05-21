import { Button, Input, Option, Select, Textarea } from '@material-tailwind/react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const productSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().required('Price is required'),
  category: Yup.string().required('Category is required'),
  brand: Yup.string().required('Brand is required'),
})

export default function ProductAdd() {
  return (
    <div className='max-w-[450px]'>
      <Formik
        initialValues={{
          title: '',
          description: '',
          image: '',
          price: '',
          category: '',
          brand: '',
          imageReview: ''

        }}

        onSubmit={async (val) => {

        }}

        validationSchema={productSchema}
      >
        {({ handleSubmit, handleChange, values, errors, setFieldValue, touched }) => (
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <Input
                type="text"
                label="Title"
                name="title"
                onChange={handleChange}
                value={values.title}
                error={errors.title && touched.title}
              />
              {errors.title && touched.title && <p className='text-red-600'>{errors.title}</p>}
            </div>

            <div>
              <Input
                type="text"
                label="Price"
                name="price"
                onChange={handleChange}
                value={values.price}
                error={errors.price && touched.price}
              />
              {errors.price && touched.price && <p className='text-red-600'>{errors.price}</p>}
            </div>

            <div>
              <Select label='Category' name='category'>


                <Option value="clothing">Clothing</Option>
                <Option value="beauty">Beauty</Option>
                <Option value="tech">Tech</Option>
                <Option value="household">Household</Option>


              </Select>
              {errors.category && touched.category && <p className='text-red-600'>{errors.category}</p>}
            </div>
            <div>
              <Select label='Brand' name='brand'>


                <Option value="levis">Levis</Option>
                <Option value="puma">Puma</Option>
                <Option value="adidas">Adidas</Option>
                <Option value="lakme">Lakme</Option>
                <Option value="pantaloons">Pantaloons</Option>
                <Option value="myntra">Myntra</Option>

              </Select>
              {errors.brand && touched.brand && <p className='text-red-600'>{errors.brand}</p>}
            </div>

            <div>
              <Textarea
                label="Description"
                name="description"
                onChange={handleChange}
                value={values.description}
                error={errors.description && touched.description}
              />
              {errors.description && touched.description && <p className='text-red-600'>{errors.description}</p>}
            </div>


            <Button type='submit'>Submit</Button>


          </form>
        )}
      </Formik>
    </div>
  )
}
