import { v4 as uuidv4 } from "uuid";
import TagsListItem from "../TagListItem/TagListItem";
import TagsListStyled from "./TagsListStyled";

const TagsList = ({ tags, delTag }) => {
  return (
    <TagsListStyled>
      <h2 className="titleList">Tags list:</h2>
      <ul className="list">
        {tags.length > 0 &&
          tags.map((tag) => (
            <TagsListItem delTag={delTag} tag={tag} key={uuidv4()} />
          ))}
      </ul>
    </TagsListStyled>
  );
};

export default TagsList;
