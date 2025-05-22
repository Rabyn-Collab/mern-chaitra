import { Button, Input, Option, Select, Textarea } from '@material-tailwind/react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';
import { useGetProductQuery, useUpdateProductMutation } from '../products/productApi.js';
import { baseUrl } from '../../app/mainApi.js';
import { commonSchema } from './ProductAdd.jsx';

const updateProductSchema = Yup.object().shape({
  ...commonSchema,
  image: Yup.mixed().test('fileType', 'Unsupported File Format', (value) => {
    console.log(value);
    if (!value) return true;
    return ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'].includes(value.type);
  })
})

export default function ProductUpdate() {
  const { id } = useParams();
  const { isLoading, error, data } = useGetProductQuery(id);
  const [updateProduct, { isLoading: updateLoading }] = useUpdateProductMutation();
  const nav = useNavigate();
  const { user } = useSelector((state) => state.userSlice);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className='max-w-[450px]'>
      <Formik
        initialValues={{
          title: data.title,
          description: data.description,
          image: '',
          price: data.price,
          category: data.category,
          brand: data.brand,
          imageReview: data.image

        }}

        onSubmit={async (val) => {
          const formData = new FormData();
          formData.append('title', val.title);
          formData.append('description', val.description);
          formData.append('price', Number(val.price));
          formData.append('category', val.category);
          formData.append('brand', val.brand);


          try {
            if (val.image) formData.append('image', val.image);
            await updateProduct({ body: formData, token: user.token, id: data._id }).unwrap();
            toast.success('Product Added');
            nav(-1);
          } catch (err) {
            toast.error(err.data.message || err.error);
          }

        }}

        validationSchema={updateProductSchema}
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
              <Select
                value={values.category}
                onChange={(e) => setFieldValue('category', e)}
                label='Category' name='category'>


                <Option value="clothing">Clothing</Option>
                <Option value="beauty">Beauty</Option>
                <Option value="tech">Tech</Option>
                <Option value="household">Household</Option>


              </Select>
              {errors.category && touched.category && <p className='text-red-600'>{errors.category}</p>}
            </div>
            <div>
              <Select
                value={values.brand}
                onChange={(e) => setFieldValue('brand', e)}
                label='Brand' name='brand'>
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

            <div>
              <Input

                onChange={(e) => {
                  const file = e.target.files[0];
                  setFieldValue('imageReview', URL.createObjectURL(file))
                  setFieldValue('image', file);
                }}
                name='image'
                type="file" label='select file' />
              {touched.image && errors.image && <p className='text-red-600'>{errors.image}</p>}

              {!errors.image && values.imageReview && <img src={`${values.image ? values.imageReview : baseUrl + data.image}`} className='h=[200px] w-[200px] object-cover mt-4' alt="" />}
            </div>


            <Button loading={updateLoading} type='submit'>Submit</Button>


          </form>
        )}
      </Formik>
    </div>
  )
}
