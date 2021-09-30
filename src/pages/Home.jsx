import React, { useEffect, useState } from "react";
import { getAllByCatagories } from "../api";
import CatagoryList from "../components/CatagoryList";
import Loader from "../components/Loader";
import Search from "../components/Search";
import { useHistory, useLocation } from "react-router-dom";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const { push } = useHistory();
  console.log(pathname);
  console.log(search);
  console.log(push);

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?qidirsh=${str}`,
    });
  };

  useEffect(() => {
    getAllByCatagories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(search ?
        data.categories.filter((item) =>
          item.strCategory
            .toLowerCase()
            .includes(search.split("=")[1].toLowerCase())
        ) : data.categories
      );
    });
  }, [search]);
  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Loader />
      ) : (
        <CatagoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export default Home;
