import { forwardRef } from "react";

const Home = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      id={"Homepage"}
      className="bg-red-400 w-screen h-screen overflow-hidden"
    ></div>
  );
});

export default Home;
