import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";

export const Home = () => {
  // get all books when user lands on the page

  // populate them as mentioned below
  const [showbooks, setShowBooks] = useState([]);
  useEffect(() => {
    getData();
  },[])

  const getData = () => {
    axios.get("http://localhost:8080/books").then((res) => {
      setShowBooks(...showbooks, res.data)
    })
  };
  console.log(showbooks)

  

  return (
    <div className="homeContainer" style={{
      justifyContent:"space-evenly",
      paddingTop:"10px",
      // display:"flex"
    }}
    id="booksShow"
    >
      {
        showbooks.map((el) => {
          return (
            <>
            <div id="products" style={{
           

            }}>
              <img src={el.imageUrl} alt="images"></img>
              <h3 >{el.title}</h3>
              <h3 >{el.price}</h3>
              <p>{el.section}</p>
              <Link to={`/books/${el.id}`}>more details
              </Link>
              
            </div>
            </>
          )
        })
      }
      {/* <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      /> */}

      {/* <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
      {/* </Main> */} */
    </div>
  );
};