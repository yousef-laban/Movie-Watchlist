import { FlexStyle, CardStyle, DeleteButton, OtherButton } from "../styles";
import { useDispatch } from "react-redux";
import { deleteMovie, moveMovieToWatched } from "../store/actions";

const WatchListCard = (props) => {
  const dispatch = useDispatch();

  return (
    <CardStyle>
      <FlexStyle>
        <h4 style={{ width: "50%" }}>{props.movie.name}</h4>

        <div>
          <OtherButton
            onClick={() => {
              dispatch(deleteMovie(props.movie.id));
              dispatch(moveMovieToWatched(props.movie));
            }}
          >
            Watched
          </OtherButton>
          <DeleteButton onClick={() => dispatch(deleteMovie(props.movie.id))}>
            {" "}
            Delete
          </DeleteButton>
        </div>
      </FlexStyle>
    </CardStyle>
  );
};

export default WatchListCard;
