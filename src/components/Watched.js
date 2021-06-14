import { useSelector } from "react-redux";
import WatchedCard from "./WatchedCard";
import {
  FlexStyleVer,
  FlexStyle,
  Center,
  ListStyle,
  SearchStyle,
} from "../styles";
import { useState } from "react";

const Watched = () => {
  const watchedMovies = useSelector((state) => state.watched);
  const [search, setSearch] = useState("");

  let list = watchedMovies
    .filter((movie) => movie.name.toLowerCase().includes(search.toLowerCase()))
    .map((movie) => {
      return <WatchedCard key={movie.id} movie={movie} />;
    });

  return (
    <ListStyle>
      <Center>
        <FlexStyle>
          <h3> Watched</h3>
          <p>number of Movie : {list.length}</p>
          <SearchStyle
            type="text"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search ..."
          />
        </FlexStyle>
      </Center>

      <FlexStyleVer>{list.length === 0 ? "No Movies" : list}</FlexStyleVer>
    </ListStyle>
  );
};

export default Watched;
