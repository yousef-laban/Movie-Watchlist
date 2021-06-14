import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/actions";
import { SearchStyle, SearchButton } from "../styles";

const AddMovie = () => {
  const [addedMovie, setAddedMovie] = useState({ name: "" });
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "80px" }}>
      <SearchStyle
        type="text"
        onChange={(event) => setAddedMovie({ name: event.target.value })}
        placeholder="Movie...."
      />

      <SearchButton onClick={() => dispatch(addMovie(addedMovie))}>
        {" "}
        ADD
      </SearchButton>
    </div>
  );
};

export default AddMovie;
