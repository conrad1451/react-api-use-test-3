// Source:
// [1]: https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/
// [2]: https://www.typescriptlang.org/docs/handbook/2/objects.html

import { useEffect, useState } from "react";
import axios from "axios";

const SOURCE_OF_USERES = "https://jsonplaceholder.typicode.com/users";

interface User {
  name: string;
  username: string;
  email: string;
  address: object;
  phone: string;
  website: string;
  company: object;
}

const FetchOutput = () => {
  const [users, setUsers] = useState(Array<User>);
  useEffect(() => {
    fetch(SOURCE_OF_USERES)
      .then(function (response) {
        // The API call was successful!
        if (response.ok) {
          console.log("\n\nSECOND also good");
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then(function (data) {
        // This is the JSON from our response
        console.log(data);
        setUsers(data);
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p>
          The user {user.name} has the username {user.username} and the email of{" "}
          {user.email}
        </p>
      ))}
    </div>
  );
};

export default FetchOutput;
