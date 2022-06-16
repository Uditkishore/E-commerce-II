import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  VStack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../../Redux/Products/action"


const FilterComp = () => {

  const dispatch = useDispatch()

  const [searchParams, setsearchParams] = useSearchParams()
  const [catagoryValues, setCatagoryValues] = useState(searchParams.getAll("category") || [])

  const categoryHandler = (values) => {
    setCatagoryValues(values)
  }

  useEffect(() => {
    if (catagoryValues) {
      setsearchParams({ category: catagoryValues });
      let params = {
        category: searchParams.getAll("category")
      }
      dispatch(fetchData(params))
    }
  }, [catagoryValues, setsearchParams, dispatch, searchParams])

  return <div><Box p={"1rem 2rem"}>
    <VStack
      divider={""}
      spacing={4}
      align='stretch'
      p={'2'}
    >
      <Box >
        <Text fontSize={'2xl'}>
          Filters
        </Text>
        <Text>
          Category
        </Text>
        <CheckboxGroup colorScheme={'green'}
          onChange={categoryHandler} defaultValue={catagoryValues}  >
          <VStack alignItems={"baseline"} >
            <Checkbox value={"men's clothing"} >Men's clothing</Checkbox>
            <Checkbox value={"jewelery"} >Jewelery</Checkbox>
            <Checkbox value={"electronics"}> Electronics</Checkbox>
            <Checkbox value={"women's clothing"}>Women's clothing</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
    </VStack>
  </Box></div>;
};

export default FilterComp;
