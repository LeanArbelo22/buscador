import useSearch from "../../hooks/useSearch";
import Item from "../Item/Item";
import "./items.scss";

const Items = () => {
  const { filteredData, loading: isLoading } = useSearch();

  const loader = <h3 className='loader'>Cargando resultados...</h3>;

  return (
    <div className='items'>
      <div className='results'>
        {isLoading
          ? loader
          : filteredData.map((item) => {
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
