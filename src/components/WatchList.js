import { useSelector } from "react-redux";
import WatchListCard from "./WatchListCard";
import {
  FlexStyleVer,
  FlexStyle,
  Center,
  ListStyle,
  SearchStyle,
} from "../styles";
import { useState } from "react";

const WatchList = () => {
  const watchListMovies = useSelector((state) => state.watchList);
  const [search, setSearch] = useState("");

  let list = watchListMovies
    .filter((movie) => movie.name.toLowerCase().includes(search.toLowerCase()))
    .map((movie) => {
      return <WatchListCard key={movie.id} movie={movie} />;
    });

  return (
    <ListStyle>
      <Center>
        <FlexStyle>
          <h3> Watchlist</h3>
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

export default WatchList;
