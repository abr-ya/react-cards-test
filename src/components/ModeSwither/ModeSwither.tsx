import React from "react";
import Button from "react-bootstrap/Button";
import { Heart, HeartFill } from "react-bootstrap-icons";

interface IModeSwither {
  isFavoriteMode: boolean;
  changeMode: () => void;
}

const ModeSwither = ({
  isFavoriteMode,
  changeMode,
}: IModeSwither): JSX.Element => (
  <div style={{ marginRight: "10px" }}>
    <Button variant="outline-info" className="mb-1" onClick={changeMode}>
      {isFavoriteMode ? (
        <HeartFill color="red" size={18} />
      ) : (
        <Heart color="red" size={18} />
      )}
    </Button>
  </div>
);

export default ModeSwither;
