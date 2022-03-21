import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";
import { BookCard } from "../Components/BookCard/BookCard";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/book" element={<BookCard />} />
        <Route exact path="/bookdetails/:id" element={<BookDetailsPage />} />
        <Route exact path="/books/undefined" element={<NotFound />} />
        <Route exact path="/section/" element={<Section />} />
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
      </Routes>
    </>
  );
};
