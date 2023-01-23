import React from 'react'
import styled from 'styled-components';

const FilterSection = () => {
  return (
    <Wrapper>
    <div className='filter-search'>

    
    </div>

    </Wrapper>
  )
}

export default FilterSection;
const Wrapper =styled.section`
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
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }




`
