import { useSelector, useDispatch } from "react-redux";
import {
  setValue,
  setFilteredData,
  setIsLoading,
} from "../store/slices/searchSlice";
import initialData from "../data";

const useSearch = () => {
  const { value, filteredData, loading } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const updateSearch = (newValue) => {
    dispatch(setValue(newValue));
  };

  const search = () => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      if (value === "") {
        dispatch(setFilteredData(initialData));
      } else {
        const filteredResults = initialData.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        dispatch(setFilteredData(filteredResults));
      }
      dispatch(setIsLoading(false));
    }, 3000);
  };

  return { value, filteredData, updateSearch, search, loading };
};

export default useSearch;
