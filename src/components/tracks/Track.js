import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { MdAlbum } from "react-icons/md";
import { Link } from "react-router-dom";

const Track = (props) => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <BsFillPlayFill
                size="1.7em"
                style={{ position: "relative", left: "-5px" }}
              />
              Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <MdAlbum
                size="1.4em"
                style={{ position: "relative", left: "-4px" }}
              />{" "}
              Album
            </strong>
            : {track.album_name}
          </p>
          <Link
            className="btn btn-dark d-flex align-items-center justify-content-center btn-block"
            to={`lyrics/track/${track.track_id}`}
          >
            <FiChevronRight /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
