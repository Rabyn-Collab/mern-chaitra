import { Checkbox } from '@material-tailwind/react'
import { useUpdateTodoMutation } from './todoApi'
import toast from 'react-hot-toast';


export default function TodoCheck({ todo }) {
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();

  const handleCheck = async () => {
    try {
      await updateTodo({
        id: todo.id,
        body: {
          title: 'hello jee'
        }
      }).unwrap();
      toast.success('Todo updated successfully');
    } catch (err) {
      toast.error('Something went wrong');
    }
  }

  return (
    <div>

      <Checkbox
        onChange={() => handleCheck()}
        checked={todo.isCompleted} />

    </div>
  )
}
