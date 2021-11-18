import { useEffect, useState } from "react";
import TagForm from "./components/TagForm/TagForm.jsx";
import TagsList from "./components/TagsList/TagsList.jsx";

function App() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    let urlHash = window.location.hash;

    if (!urlHash || !urlHash.startsWith("#tags=")) {
      return;
    }

    let initialTags = urlHash.slice(6).split(",");
    setTags(initialTags);
  }, []);

  const addTag = (tagName) => {
    const newTags = [...tags, tagName];
    setTags(newTags);
    window.location.hash = `tags=${newTags.join(",")}`;
  };

  const delTag = (tag) => {
    const newTags = tags.filter((item) => item !== tag);
    setTags(newTags);
    if (newTags.length > 0) {
      window.location.hash = `tags=${newTags.join(",")}`;
    } else {
      window.location.hash = "";
    }
  };

  return (
    <div className="container">
      <TagForm addTag={addTag} />
      {tags.length > 0 && <TagsList delTag={delTag} tags={tags}></TagsList>}
    </div>
  );
}

export default App;
