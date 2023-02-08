import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filtercontext";
import {Button } from "../../styles/Button";

const FilterSection = () => {
  const {
    filters: { text,category,price,minPrice,maxPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  //to get the unique data of each field
  const getUniqueData = (data,attr) =>{
    let newVal = data.map((curElem) =>{
      return curElem[attr];
    });
    //console.log(newVal);

    return (newVal = ["all",...new Set(newVal)]);
   //console.log(newVal);
  }

  //to get unique data in array format
  const categoryData=getUniqueData(all_products,"category");

  return (
    <Wrapper>
     <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search Products here"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>


      <div className="filter-category">
        <h3>Category</h3>
        <div> 
        {categoryData.map((curElem,index) =>{
          return(
            <button 
            key={index}
            type="button"
            name="category"
            value={curElem}
            // className={curElem ===  category ? "active" : ""}
            onClick={updateFilterValue}>
              {curElem}
            </button>      
            );
            })}
         </div>
      </div>

      <div className="filter-price">
        <h3>Price</h3>
        <p>
          ${price}
        </p>
        <input 
        type="range"
        name="price"
        min={minPrice}
        max={maxPrice}
        value={price}
        onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.4rem 1rem;
      width: 90%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;
