// Source:
// [1]: https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/

import { useEffect, useState } from "react";
import axios from "axios";

// instead of using ignore for any file type, I just defined
// an interface for meals and set usestate to an array of Meals
interface Meal {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

const AxiosOutput = () => {
  const [meals, setMeals] = useState(Array<Meal>);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        setMeals(res.data.meals);
      });
  }, []);

  return (
    <div>
      {meals.map((meal) => (
        <img
          key={meal.idMeal}
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={400}
        />
      ))}
    </div>
  );
};

export default AxiosOutput;
