import { useDispatch, useSelector } from "react-redux"
import { Avatar, Button, Card, IconButton, Typography } from "@material-tailwind/react";
import { removeFromCart, setToCarts } from "./cartsSlice.js";
import { baseUrl } from "../../app/mainApi.js";

const TABLE_HEAD = ["Items", "Price", "Quantity", "Total"];



export default function CartPage() {
  const { carts } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const totalAmount = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="p-5">

      {carts.length === 0 && <h1 className="text-center text-3xl">No Items In Cart</h1>}

      {carts.length > 0 && <div>



        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {carts.map(({ title, image, price, quantity, _id }, index) => {
                const isLast = index === carts.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={_id}>
                    <td className={classes}>

                      <div className="flex items-center gap-3">
                        <Avatar src={`${baseUrl}${image}`} />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {title}
                        </Typography>
                      </div>

                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        Rs.{price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <UpdateToCart product={{ title, image, price, quantity, _id }} />

                    </td>
                    <td className={classes}>

                      <div className="flex items-center gap-2">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          Rs.{price * quantity}
                        </Typography>
                        <IconButton
                          onClick={() => dispatch(removeFromCart(_id))}
                          variant="text">
                          <i className="fas fa-close" />
                        </IconButton>
                      </div>

                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>

        <div className="mt-6 space-y-4 flex flex-col items-end">
          <h1 className="text-xl">Total Amount : Rs.{totalAmount}</h1>
          <Button>Place an Order</Button>
        </div>

      </div>}

    </div>
  )
}




function UpdateToCart({ product }) {
  const dispatch = useDispatch();
  const handleCart = (isAdd) => {
    dispatch(setToCarts({ ...product, quantity: isAdd ? product.quantity + 1 : product.quantity - 1 }))
  }

  return (
    <div className="flex gap-4">
      <IconButton
        onClick={() => handleCart(false)}
        disabled={product.quantity === 1}
        size="sm">
        <i className="fas fa-minus" />
      </IconButton>
      <h1 className="text-xl">{product.quantity}</h1>
      <IconButton
        onClick={() => handleCart(true)}
        size="sm">
        <i className="fas fa-add" />
      </IconButton>

    </div>
  )

}