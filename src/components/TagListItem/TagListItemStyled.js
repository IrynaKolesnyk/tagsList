import styled from "styled-components";

const TagsListItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  color: #262897;
  font-weight: 500;
  .tagName {
  }
`;

export default TagsListItemStyled;
