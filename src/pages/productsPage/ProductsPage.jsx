import { useEffect, useState } from "react";

import Card from "../../components/productsPage/card/Card";
import Loader from "../../components/loader/Loader";
import { useProducts } from "../../context/ProductContext";

import {
  filteredProducts,
  getInitialQuery,
  searchProducts,
} from "../../helpers/helper";
import styles from "./ProductsPage.module.css";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../../components/productsPage/searchBox/SearchBox";
import SideBar from "../../components/productsPage/sidebar/SideBar";
import { useTitle } from "../../hooks/useTitle";

function ProductsPage() {
  const products = useProducts();
  useTitle("products page");
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filteredProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);
  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
