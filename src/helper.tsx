import AxiosOutput from "./apimodules/MealModule.tsx";
import FetchOutput from "./apimodules/UsernameModule.tsx";
import PhotosOutput from "./apimodules/PhotosModule.tsx";

// Source: https://codedamn.com/news/frontend/use-css-to-put-div-side-by-side
import "./inline-block.css";

function Helper() {
  return (
    <>
      <div className="child1">
        <AxiosOutput />
      </div>
      <div className="child2">
        <FetchOutput />
      </div>
      <div className="child1">
        <PhotosOutput />
      </div>
    </>
  );
}

export default Helper;
