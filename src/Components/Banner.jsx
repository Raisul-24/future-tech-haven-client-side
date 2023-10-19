
const Banner = () => {
   return (
      <div>
         <div className="carousel w-full my-10">
               <div id="slide1" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/k9WVRLy/Banner-2.png" 

                  className="w-full h-[70vh] rounded-xl" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                     <a href="#slide4" className="btn btn-circle">❮</a>
                     <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
               </div>
               <div id="slide2" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/yYqJsfH/shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce.jpg" 
                  className="w-full h-[70vh] rounded-xl" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                     <a href="#slide1" className="btn btn-circle">❮</a>
                     <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
               </div>
               <div id="slide3" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/grnY5kD/Gear-Best-Flash-Sale.jpg" 
                  className="w-full h-[70vh] rounded-xl" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                     <a href="#slide2" className="btn btn-circle">❮</a>
                     <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
               </div>
               <div id="slide4" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/bbLxStZ/smartphones-ranked-2-2.jpg" 
                  className="w-full h-[70vh] rounded-xl" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                     <a href="#slide3" className="btn btn-circle">❮</a>
                     <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
               </div>
            </div>
      </div>
   );
};

export default Banner;