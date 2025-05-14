import { IconButton, Spinner } from '@material-tailwind/react'
import { useRemoveTodoMutation } from './todoApi';
import toast from 'react-hot-toast';

export default function TodoRemove({ id }) {
  const [removeTodo, { isLoading }] = useRemoveTodoMutation();


  const handleRemove = async () => {
    try {
      await removeTodo(id).unwrap();
      toast.success('Todo removed successfully');
    } catch (err) {
      toast.error('Something went wrong');
    }
  }
  return (
    <div>

      {isLoading ? <Spinner /> : <IconButton
        onClick={() => handleRemove()}
        color='pink' size='sm'>
        <i className="fas fa-trash" />
      </IconButton>}

    </div>
  )
}
