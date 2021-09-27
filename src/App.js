import React, {useState, useEffect} from 'react'




function App () {

    const [dogs, setDogs] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((res) => res.json())
          .then((dog) => {
              setDogs(dog.message);
          });
        }, []);


return (
    <p>hello</p>
)
}


export default App

