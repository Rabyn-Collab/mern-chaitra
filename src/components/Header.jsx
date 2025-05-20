import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";

import ProfileMenu from "./ProfileMenu.jsx";
import { Link } from "react-router";
import { useSelector } from "react-redux";


export default function Header() {
  const { user } = useSelector((state) => state.userSlice);

  return (
    <Navbar className="p-2  lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>


        {user ? <ProfileMenu /> : <Link to={'/login'}>
          <Button size="sm" variant="text">
            <span>Log In</span>
          </Button>
        </Link>}




      </div>

    </Navbar>
  );
}