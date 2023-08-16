import "./item.scss";

const Item = ({ img, alt, name, code, price}) => {
  return (
    <div className='item'>
      <div className='imgContainer'>
        <img
          src={img}
          alt={alt}
          className="image"
        />
      </div>
      <div className='infoContainer'>
        <p className='name'>{name}</p>
        <p className='code'>CODE{code}</p>
        <p className='price'>
          Precio:
          <span className="span">${price}</span>
        </p>
      </div>
    </div>
  );
};

export default Item;
