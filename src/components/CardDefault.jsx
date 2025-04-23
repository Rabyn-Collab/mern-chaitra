import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { RecipeTable } from "./RecipeTable";

export function CardDefault({ recipe }) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={recipe.image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {recipe.name}
        </Typography>

        <RecipeTable ingres={recipe.ingredients} intructs={recipe.instructions} />
      </CardBody>

    </Card >
  );
}