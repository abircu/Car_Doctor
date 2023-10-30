import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full  h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-lg" />
        <div className="absolute rounded-lg flex h-full  items-center pl-6  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-[40%]">
            <h2 className="text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              There are many variation of passage of available, but the mejority
              have suffered alternation in some from
            </p>
            <div className="flex gap-6">
              <button className="btn btn-primary bg-orange-500">
                discover more
              </button>
              <button className="btn btn-secondary bg-transparent">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  left-5 right-5 bottom-5">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-lg" />
        <div className="absolute rounded-lg  flex h-full  items-center pl-6  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-[40%]">
            <h2 className="text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              There are many variation of passage of available, but the mejority
              have suffered alternation in some from
            </p>
            <div className="flex gap-6">
              <button className="btn btn-primary bg-orange-500">
                discover more
              </button>
              <button className="btn btn-secondary bg-transparent">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  left-5 right-5 bottom-5">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-lg" />
        <div className="absolute rounded-lg flex h-full  items-center pl-6  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-[40%]">
            <h2 className="text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              There are many variation of passage of available, but the mejority
              have suffered alternation in some from
            </p>
            <div className="flex gap-6">
              <button className="btn btn-primary bg-orange-500">
                discover more
              </button>
              <button className="btn btn-secondary bg-transparent">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  left-5 right-5 bottom-5">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg" />
        <div className="absolute rounded-lg flex h-full  items-center pl-6  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 w-[40%]">
            <h2 className="text-6xl font-bold">
              Affordable price for car servicing
            </h2>
            <p>
              There are many variation of passage of available, but the mejority
              have suffered alternation in some from
            </p>
            <div className="flex gap-6">
              <button className="btn btn-primary bg-orange-500">
                discover more
              </button>
              <button className="btn btn-secondary bg-transparent">
                Latest project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute  flex justify-end  left-5 right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
