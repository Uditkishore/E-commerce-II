import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/Products/action";
import FilterComp from "./FilterComp";
import { Box, Spinner } from "@chakra-ui/react";
import "./products.css"
import ProductSimple from "./singleProduct";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const { products, isLoading } = useSelector((store) => store.ecommerceData);
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch();
  useEffect(() => {
    if (products?.length === 0) {
      let params = {
        category: searchParams.getAll("category")
      }
      dispatch(fetchData(params));
    }
  }, [dispatch, products?.length]);

  return (
    <Box display={'flex'} gap={'10px'} >
      <Box padding={'2'} display={{ base: "none", md: "block" }}>
        <FilterComp />
      </Box>
      <Box className="PriductDiv" >
        {isLoading ? <Spinner
          thickness='5px'
          speed='1.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        /> : <Box className="PriductList">{products.map((e) =>
          <ProductSimple key={e.id} element={e} />
        )}</Box>}

      </Box>
    </Box >
  );
};

export default ProductsPage;
