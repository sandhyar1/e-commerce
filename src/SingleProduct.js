import { useEffect,useState } from "react";
import {useParams} from "react-router";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./styles/Container";
import PageNavigation from "./Components/SingleProduct/PageNavigation";
import Rating from "./Components/SingleProduct/Rating";
import AddToCart from "./Components/SingleProduct/AddtoCart";
import { useProductContext } from "./context/productcontex";




const API = "https://fakestoreapi.com/products";



const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
  useProductContext();

 const { id } = useParams();

 const {id:alias,category,price,title,image,description,rating}=singleProduct;
const {rate,count}=rating;


    useEffect(() => {
      getSingleProduct(`${API}/${id}`);
}, []);

 if (isSingleLoading) {
      return <div className="page_loading">Loading.....</div>;
  }
   return (
      <>
      <Wrapper>
      <PageNavigation name={title} />
      <Container className="container">
        <div className="grid grid-two-column">
         {/* product image */}
         <div className="product_images">
         {/* <MyImage  imgs={image} /> */}
         <img src={image} alt={image} />
         </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{title}</h2>
            <Rating rate={rate} count={count} />

            <p className="product-data-price">
              MRP:{price + 25000}
            </p>
            <p>{description}</p>
            <NavLink>
           <AddToCart className="addtocart" product={singleProduct} />
            </NavLink>
          </div>
          </div>
         </Container>
          </Wrapper>

          </>
  )
}

const Wrapper = styled.section`
.container {
    padding: 9rem 0;
  }
  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
  }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;
export default  SingleProduct;
