import useSearch from "../../hooks/useSearch";
import Item from "../Item/Item";
import "./items.scss";

const Items = () => {
  const { filteredData } = useSearch();

  return (
    <div className='items'>
      <div className='results'>
        {filteredData.map((item) => {
          return (
            <Item
              key={item.id}
              img={item.img}
              alt={`Imagen de ${item.name}`}
              name={item.name}
              code={item.code}
              price={item.price}
            />
          );
        })}
      </div>
      <div className='separator'>
        <div className='line'></div>
        <span className='total'>{filteredData.length} resultados</span>
      </div>
    </div>
  );
};

export default Items;
