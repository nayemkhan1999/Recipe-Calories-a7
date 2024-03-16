import Rectangle from "../img/Rectangle.png";
const Header = () => {
  return (
    <div className="lg:mx-20 mx-5 mt-4 font-lexend">

      <div className=" lg:h-[600px] text-center "
        style={{
          backgroundImage: `url(${Rectangle})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          
        }}
      >
        <h1 className=" text-white  lg:text-[52px] font-bold lg:pt-28 pb-24 lg:pb-0 ">Discover an exceptional cooking <br /> class tailored for you!</h1>
        <p className="hidden lg:block text-lg  font-normal opacity-70 text-white mt-5   ">The Food Studio celebrates the rich cultural heritage of Africans and<br /> African Americans across the diaspora,  recognizing food and music as integral  </p>
        <div className=" gap-5 mx-auto lg:inline-flex mt-8 hidden ">
            <button className="bg-[#0BE58A] rounded-full p-4 ">Explore Now</button>
            <button className="text-white border-2 rounded-full p-4">Our Feedback</button>

        </div>
      </div>
    </div>
  );
};

export default Header;
