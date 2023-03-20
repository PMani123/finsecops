import React,{useEffect} from "react";
function Resize() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      console.log("manioiii");
      console.log(window.innerHeight)
      console.log(window.innerWidth)
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  });
  return (
    <div>
      Rendered at {dimensions.width} x {dimensions.height}
    </div>
  );
}

export default Resize;
