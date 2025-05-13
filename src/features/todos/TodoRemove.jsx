import { IconButton } from '@material-tailwind/react'
import { useRemoveTodoMutation } from './todoApi';
import toast from 'react-hot-toast';

export default function TodoRemove({ id }) {
  const [removeTodo, { isLoading }] = useRemoveTodoMutation();

  const handleRemove = async () => {
    try {
      await removeTodo(id).unwrap();
      toast.success('Todo updated successfully');
    } catch (err) {
      toast.error('Something went wrong');
    }
  }
  return (
    <div>

      <IconButton
        onClick={() => handleRemove()}
        color='pink' size='sm'>
        <i className="fas fa-trash" />
      </IconButton>

    </div>
  )
}
