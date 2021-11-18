import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TagFormStyled from "./TagFormStyled";

const TagForm = ({ addTag }) => {
  const [tagName, setTagName] = useState("");

  const handleChange = (event) => {
    setTagName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tagName === "") return;
    addTag(tagName);
    setTagName("");
  };

  return (
    <TagFormStyled className="form" onSubmit={handleSubmit}>
      <TextField
        className="input"
        type="text"
        name="tagName"
        value={tagName}
        onChange={handleChange}
        minLength="3"
        required
        label="Enter new tag"
        variant="outlined"
        autoComplete="off"
        autoFocus
        id="outlined-size-small"
        size="small"
      />
      <Button
        type="submit"
        className="addBtn"
        variant="outlined"
        color="primary"
      >
        add
      </Button>
    </TagFormStyled>
  );
};

export default TagForm;

//<input
//className="input"
//type="text"
//value={tagName}
//onChange={handleChange}
//autoComplete="off"
//autoFocus
//placeholder="enter new tag"
///>
//<button type="submit" className="button">
//<span>Search</span>
//</button>
