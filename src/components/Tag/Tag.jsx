import { AiOutlineClose } from "react-icons/ai";
import "./tag.scss";

const Tag = ({ text, onClick }) => {
  return (
    <div className='tag'>
      <p>{text}</p>
      <AiOutlineClose onClick={onClick} />
    </div>
  );
};

export default Tag;
