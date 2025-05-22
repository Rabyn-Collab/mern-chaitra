import React from 'react'
import { useGetProductsQuery } from '../products/productApi.js'
import { Avatar, Button, Card, IconButton, Typography } from "@material-tailwind/react";
import { baseUrl } from '../../app/mainApi.js';
import { Link, useNavigate } from 'react-router';
import RemoveProduct from './RemoveProduct.jsx';

const TABLE_HEAD = ["Product", "Name", "Price", "CreatedAt", "Edit", "Remove"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];
export default function AdminPage() {
  const { isLoading, error, data } = useGetProductsQuery();
  const nav = useNavigate();
  if (isLoading) return 'Loading...';
  if (error) return `${error}`;

  return (
    <div>
      <div className='flex justify-end'>
        <Link to={'/admin/add-product'}>
          <Button color='purple'>Add Product</Button>
        </Link>

      </div>


      <Card className="h-full w-full overflow-scroll p-5">
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
            {data.map(({ _id, image, price, createdAt, title }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <Avatar src={`${baseUrl}${image}`} />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {title}
                    </Typography>
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
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {createdAt}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <IconButton
                      onClick={() => nav(`/admin/edit-product/${_id}`)}
                      color='green'>
                      <i className="fas fa-edit" />
                    </IconButton>

                  </td>
                  <td className={classes}>
                    <RemoveProduct id={_id} />


                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

    </div>
  )
}
