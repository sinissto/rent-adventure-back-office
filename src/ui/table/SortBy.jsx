import Select from "./Select.jsx";
import { useSearchParams } from "react-router";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    const { value } = e.target;
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type={"white"}
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
