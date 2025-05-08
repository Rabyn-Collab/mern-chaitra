import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { removeUser } from "../pages/users/userSlice";
export default function RemoveDialog({ index }) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();

  return (
    <div>

      <IconButton onClick={handleOpen} color='pink' size='sm'>
        <i className="fas fa-trash" />
      </IconButton>


      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => {
            dispatch(removeUser(index));
            handleOpen();
          }}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>



    </div>
  )
}
