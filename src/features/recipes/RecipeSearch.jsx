import { Input, Button } from "@material-tailwind/react";
import { Formik } from "formik";
import { useLazySearchRecipesQuery } from "./recipeApi";
import { Image, Shimmer } from "react-shimmer";



export default function RecipeSearch() {

  const [searchRecipe, { isLoading, data }] = useLazySearchRecipesQuery();
  console.log(data);

  return (
    <div className="p-5">

      <Formik
        initialValues={{
          search: ''
        }}

        onSubmit={(val, { resetForm }) => {
          searchRecipe(val.search);
          resetForm();

        }}
      >
        {({ handleChange, values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="relative flex w-full max-w-[24rem]">
              <Input
                name="search"
                label="Type Recipe"
                value={values.search}
                onChange={handleChange}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Button
                loading={isLoading}
                type="submit"
                size="sm"
                color={values.search ? "gray" : "gray"}
                disabled={!values.search}
                className="!absolute right-1 top-1 rounded"
              >
                Search
              </Button>
            </div>
          </form>
        )}
      </Formik>

      <div className='grid grid-cols-4 gap-5 mt-5 '>
        {data && data.recipes.map((rec) => {
          return <div key={rec.id}>
            <Image
              src={rec.image} alt=""
              fadeIn
              fallback={<Shimmer height={300} width={300} />}
            />
            <p>{rec.name}</p>

          </div>
        })}

      </div>


    </div>
  )
}
