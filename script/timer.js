const Timer = ({ timeout = 20, size = 20 } = {}) => {
    const component = document.createElement("canvas");
    const context = component.getContext("2d");
   
    const primaryColor = "black";
    const secondaryColor = "white";
   
    component.className = "timer";
    component.setAttribute("width", size);
    component.setAttribute("height", size);
   
    const radius = size / 2;
    const cx = radius;
    const cy = radius;
    const anglestart = Math.PI * 1.5;
   
    const draw = (time) => {
      context.fillStyle = primaryColor;
      context.strokeStyle = primaryColor;
      context.lineWidth = 5;
      const angleend = anglestart + ((360 / timeout) * time * Math.PI) / 180;
   
      context.beginPath();
      context.arc(cx, cy, radius, 0, Math.PI * 2, false);
      context.fill();
   
      context.fillStyle = secondaryColor;
   
      context.beginPath();
      context.moveTo(cx, cy);
      context.arc(cx, cy, radius, anglestart, angleend);
      context.fill();
    };
   
    let timerId = setTimeout(function tick(time = timeout) {
      if (time < 0) return;
      draw(timeout - time);
      timerId = setTimeout(() => tick(--time), 1000); // (*)
    }, 1000);
   
   
    return {component, timerId};
   };
   
   export default Timer;