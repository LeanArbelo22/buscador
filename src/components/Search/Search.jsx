import { useState } from "react";
import useSearch from "../../hooks/useSearch";
import Tag from "../Tag/Tag";
import "./search.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [tags, setTags] = useState([]);
  const { value, updateSearch, search } = useSearch();

  const handleInputChange = (e) => updateSearch(e.target.value);

  const handleSearchClick = (e) => {
    e.preventDefault();
    search();

    if (value) {
      setTags([...tags, value]);
    }
  };

  const handleTags = (tag) => {
    // Solo simule la aparicion de los tags pero no los use como filtros, perdon 🙏
    const updatedTags = tags.filter((a) => a !== tag);
    setTags(updatedTags);
  };

  return (
    <div className='search'>
      <form className='searchBox'>
        <input
          type='text'
          value={value}
          onChange={handleInputChange}
          name='description'
          id='searchInput'
          className='searchInput'
        />
        <button type='submit' onClick={handleSearchClick} className='searchBtn'>
          <AiOutlineSearch /> Buscar
        </button>
      </form>

      <div className='searchTags'>
        {tags.map((tag, i) => (
          <Tag key={i} text={tag} onClick={() => handleTags(tag)} />
        ))}
      </div>
    </div>
  );
};

export default Search;
