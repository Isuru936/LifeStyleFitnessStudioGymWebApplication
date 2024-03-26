import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AnimationDummy() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <h1>Welcome to react animation</h1>
      <h1>Fade</h1>
      <div
        className="animation w-[400px] heoght-[80px] bg-blue-600 m-10 p-10"
        data-aos="fade-up"
      >
        Hello
      </div>
      <div
        className="animation w-[400px] heoght-[80px] bg-blue-600 m-10 p-10"
        data-aos="fade-up"
      >
        Hello
      </div>
      <div
        className="animation w-[400px] heoght-[80px] bg-blue-600 m-10 p-10"
        data-aos="fade-up"
      >
        Hello
      </div>
      <div
        className="animation w-[400px] heoght-[80px] bg-blue-600 m-10 p-10"
        data-aos="fade-up"
      >
        Hello
      </div>
      <div
        className="animation w-[400px] heoght-[80px] bg-blue-600 m-10 p-10"
        data-aos="fade-up"
      >
        Hello
      </div>
      <div
        className="animation w-[400px] heoght-[80px] bg-blue-600 m-10 p-10"
        data-aos="fade-up"
      >
        Hello
      </div>
      <div
        className="animation w-[400px] heoght-[80px] bg-blue-600 m-10 p-10"
        data-aos="fade-up"
      >
        Hello
      </div>
      <h1>flip</h1>
      <div
        className="animation w-[400px] heoght-[80px] bg-blue-600 m-10 p-10"
        data-aos="fade-up"
      >
        Hello
      </div>
      <h1>zoom</h1>
      <div
        className="animation w-[400px] heoght-[80px] bg-blue-600 m-10 p-10"
        data-aos="fade-up"
      >
        Hello
      </div>
    </div>
  );
}

export default AnimationDummy;
