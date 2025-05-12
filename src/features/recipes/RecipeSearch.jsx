import { Input, Button } from "@material-tailwind/react";
import { Formik } from "formik";
import toast from "react-hot-toast";



export default function RecipeSearch({ searchRecipe, isFetching }) {


  return (
    <div className="">

      <Formik
        initialValues={{
          search: ''
        }}

        onSubmit={async (val, { resetForm }) => {
          try {
            const response = await searchRecipe(val.search).unwrap();
            resetForm();
            if (response.recipes.length === 0) toast.error('No recipe found');
          } catch (error) {

            toast.error('Something went wrong');

          }


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
                loading={isFetching}
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




    </div>
  )
}
