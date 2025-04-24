import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Ingredients", "Instructions"];

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

export function RecipeTable({ ingres, intructs }) {



  return (
    <div className="flex gap-5">
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>

              <th
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Ingredients
                </Typography>
              </th>

            </tr>
          </thead>
          <tbody>
            {ingres.map((value, index) => {
              const isLast = index === ingres.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>


                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {value}

                    </Typography>
                  </td>



                </tr>
              );
            })}
          </tbody>



        </table>
      </Card>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>

              <th
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Instructions
                </Typography>
              </th>

            </tr>
          </thead>
          <tbody>
            {intructs.map((value, index) => {
              const isLast = index === intructs.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>


                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {value}

                    </Typography>
                  </td>



                </tr>
              );
            })}
          </tbody>



        </table>
      </Card>
    </div>
  );
}