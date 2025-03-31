import { useEffect, useRef } from "react";
const Home = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      const typewriter = new window.Typewriter(titleRef.current, {
        loop: true,
        delay: 100,
      });
      typewriter
        .typeString("Style && confort")
        .pauseFor(2000)
        .deleteAll()
        .pauseFor(2000)
        .start();
    }
  }, []);
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="box-contaier1">
            <h1 ref={titleRef} className="title typewriter">
              Style && confort
            </h1>
            <p className="">
              Welcome to our stylish and comfortable home. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Necessitatibus inventore
              laudantium natus nam consequuntur numquam rem dolorum veniam
              voluptas molestias!
            </p>
            <button>En savoir plus</button>
          </div>
          <div className="box-container2">
            <img src="/asset/istockphoto-1941360741-2048x2048.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
