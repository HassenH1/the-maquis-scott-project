import React, { useEffect, useState } from "react";

const useFade = (initial: boolean = false) => {
  const [show, setShow] = useState(initial);
  const [isVisible, setVisible] = useState(show);

  // Update visibility when show changes
  useEffect(() => {
    if (show) setVisible(true);
  }, [show]);

  // When the animation finishes, set visibility to false
  const onAnimationEnd = () => {
    if (!show) setVisible(false);
  };

  const style = {
    animation: `${show ? "fadeIn" : "fadeOut"} 4s ease-out 1s`,
  };
  // const style = { animation: `${show ? "fadeIn" : "fadeOut"} 3s ease-out 1s` };
  // const style = { animation: `${show ? "fadeIn" : "fadeOut"} .3s` };

  // These props go on the fading DOM element
  const fadeProps: any = {
    style,
    onAnimationEnd,
  };

  return [isVisible, setShow, fadeProps];
};

export default useFade;
