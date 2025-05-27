import { useParams } from 'react-router'
import { useGetOrderDetailQuery } from './orderApi.js';
import { useSelector } from 'react-redux';
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import { baseUrl } from '../../app/mainApi.js';

export default function OrderDetail() {
  const { id } = useParams();

  const { user } = useSelector((state) => state.userSlice);

  const { isLoading, error, data } = useGetOrderDetailQuery({
    id,
    token: user.token
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.data?.message || error.error}</h1>;

  return (
    <div>

      <h1>Order Detail</h1>
      <hr />
      <p>OrderId {data._id}</p>



      <Card className="w-96 mt-4">
        <List>


          {data.orderItems && data.orderItems.map((item) => {
            return <ListItem key={item._id}>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src={`${baseUrl}${item.image}`} />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {item.title}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  {item.quantity} x Rs.{item.price}
                </Typography>
              </div>
            </ListItem>
          })}



        </List>
      </Card>

      <h1 className='mt-4 text-xl'>Total Rs.{data.totalAmount}</h1>


    </div>
  )
}
