import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import TagListItemStyled from "./TagListItemStyled";

const TagListItem = ({ tag, delTag }) => {
  const handleDelete = () => delTag(tag);
  return (
    <TagListItemStyled>
      <p className="tagName">{tag.toUpperCase()}</p>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<DeleteIcon />}
        className="delBtn"
        type="button"
        onClick={handleDelete}
        size="small"
      >
        Delete
      </Button>
    </TagListItemStyled>
  );
};

export default TagListItem;
