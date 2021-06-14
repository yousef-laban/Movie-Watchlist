import { deleteWatchedMovie, moveMovieToWatchlist } from "../store/actions";
import { FlexStyle, CardStyle, DeleteButton, OtherButton } from "../styles";
import { useDispatch } from "react-redux";

const WatchedCard = (props) => {
  const dispatch = useDispatch();

  return (
    <CardStyle>
      <FlexStyle>
        <h4 style={{ width: "50%" }}>{props.movie.name}</h4>
        <div>
          <OtherButton
            onClick={() => {
              dispatch(deleteWatchedMovie(props.movie.id));
              dispatch(moveMovieToWatchlist(props.movie));
            }}
          >
            Unwatched
          </OtherButton>
          <DeleteButton
            onClick={() => dispatch(deleteWatchedMovie(props.movie.id))}
          >
            {" "}
            Delete
          </DeleteButton>
        </div>
      </FlexStyle>
    </CardStyle>
  );
};

export default WatchedCard;
