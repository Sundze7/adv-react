import { useEffect, useState } from "react";

function MultipleReturnBasics() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //done fetching date
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <div>Multiple Return Basics</div>;
}
export default MultipleReturnBasics;
