import { useSelector, useDispatch } from "react-redux";
import { setValue, setFilteredData } from "../store/slices/searchSlice";
import initialData from "../data";

const useSearch = () => {
  const { value, filteredData } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const updateSearch = (newValue) => {
    dispatch(setValue(newValue));
  };

  const search = () => {
    setTimeout(() => {
      if (value === "") {
        dispatch(setFilteredData(initialData));
      } else {
        const filteredResults = initialData.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        dispatch(setFilteredData(filteredResults));
      }
    }, 3000);
  };

  return { value, filteredData, updateSearch, search };
};

export default useSearch;
