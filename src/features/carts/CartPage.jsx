import { useSelector } from "react-redux"

export default function CartPage() {
  const { carts } = useSelector((state) => state.cartSlice);
  return (
    <div>

    </div>
  )
}
