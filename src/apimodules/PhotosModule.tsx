import { useEffect, useState } from "react";
import axios from "axios";

// instead of using ignore for any file type, I just defined
// an interface for photos and set usestate to an array of photos
interface Photo {
  title: string;
  url: string;
  thumbnailUrl: string;
}

const PhotosOutput = () => {
  const [photos, setPhotos] = useState(Array<Photo>);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setPhotos(res.data);
    });
  }, []);

  let photoSet: Photo[] = [];

  for (let index = 0; index < photos.length; ++index) {
    if (index % 256 == 0) {
      const element = photos[index];
      photoSet.push(element);
    }
  }

  return (
    <div>
      {photoSet.map((photo) => (
        <img key={photo.title} src={photo.thumbnailUrl} width={100} />
      ))}
    </div>
  );
};

export default PhotosOutput;
