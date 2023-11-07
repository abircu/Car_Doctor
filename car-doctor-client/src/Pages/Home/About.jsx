import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            alt=""
            className=" absolute top-1/2 left-1/2 w-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h3 className="text-3xl text-orange-500 font-bold">About us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary bg-orange-500">
            Get more info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
