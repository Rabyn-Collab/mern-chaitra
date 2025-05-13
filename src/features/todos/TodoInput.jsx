import { Button, Input } from '@material-tailwind/react'
import { Formik } from 'formik'
import { useAddTodoMutation } from './todoApi'
import toast from 'react-hot-toast';


export default function TodoInput() {
  const [addTodo, { isLoading }] = useAddTodoMutation();
  return (
    <div className='w-[400px]'>

      <Formik
        initialValues={{
          title: '',
        }}
        onSubmit={async (val, { resetForm }) => {

          try {
            await addTodo({
              title: val.title
            }).unwrap();

            resetForm();

            toast.success('Todo added successfully');

          } catch (err) {
            toast.error('Something went wrong');
          }



        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className='flex gap-5 items-end'>
            <div className='w-full'>
              <Input
                name='title'
                onChange={handleChange}
                value={values.title}
                type="text" label='Todo' />
            </div>
            <div>
              <Button loading={isLoading} size='sm' type='submit'>Submit</Button>
            </div>

          </form>
        )}
      </Formik>


    </div>
  )
}
