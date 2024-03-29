import React from "react";
import classes from "./Nails.module.css";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero-footer/Hero";
import heroImage from "../../assets/images/hero/hero-img-1.jpg";
import ShapeDivider from "../../components/other-components/ShapeDivider";
import Footer from "../../components/hero-footer/Footer";
import Productcard from "../../components/cards/Productcard";
import { ProductDataContext } from "../../utils/context/ProductDataContext";
import { RatingDataContext } from "../../utils/context/RatingDataContext";

const Nails = () => {
    const [nailmakeup, setNailmakeup] = React.useState([]);
    let productContext = React.useContext(ProductDataContext);
    let ratingContext = React.useContext(RatingDataContext);

    React.useEffect(() => {
        let nailmakeupList = [];
        for(const key in productContext.products) {
            if(productContext.products[key].category === "nails") {
                nailmakeupList.push(productContext.products[key]);
            }
        }
        setNailmakeup(nailmakeupList);
    }, [])


    return (
        <>
            <Navbar />
            <Hero 
                title="Nail Polish"
                heroImage={heroImage}
            />
            <ShapeDivider />
            <div className={classes.products}>
                {nailmakeup.map(product => {
                    return <Productcard 
                                key={product.id}
                                productId={product.id}
                                productName={product.name}
                                productImage={product.image}
                                productRate={ratingContext.avgRate.filter((item) => {
                                    let rate = item.id === product.id ? item.avg : 0;
                                    return rate;
                                })}
                            />
                })}
                
            </div>
            <ShapeDivider />
            <div className={classes.footer}>
                <Footer />
            </div>
        </>
    )
}

export default Nails;