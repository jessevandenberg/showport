export const Background = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-50 w-full h-full select-none"
    >
       {/* zij lichten */}
      <div className="side-glow side-glow--blue left-[-12%] top-[10%] h-[50vh] w-[38vw]" />
      <div className="side-glow side-glow--purple right-[-12%] top-[60%] h-[48vh] w-[36vw]" />
      <div className="side-glow side-glow--purple left-[-16%] top-[32%] h-[42vh] w-[28vw]" />
      <div className="side-glow side-glow--blue right-[-16%] top-[85%] h-[40vh] w-[30vw]" />

      {/* kleurbollen in de achtergrond*/}
      <div className="sphere sphere-blue left-[-10%] top-[5%] float-y float-delay-1" />
      <div className="sphere sphere-purple right-[-10%] top-[12%] float-x float-delay-4" />
      <div className="sphere sphere-blue left-[50%] top-[17%] w-[260px] h-[260px] float-y-slow float-delay-2" />
      <div className="sphere sphere-purple right-[-10%] top-[77%] float-x float-delay-4" />
      <div className="sphere sphere-blue left-[-10%] top-[70%] w-[260px] h-[260px] float-y-slow float-delay-2" />
      <div className="sphere sphere-blue right-[-10%] top-[47%] w-[260px] h-[260px] float-y-slow float-delay-2" />
      <div className="sphere sphere-purple left-[-10%] top-[35%] float-x float-delay-4" />
      <div className="sphere sphere-blue left-[-10%] top-[70%] w-[260px] h-[260px] float-y-slow float-delay-2" />
      <div className="sphere sphere-blue left-[46%] top-[76%] w-[260px] h-[260px] float-y-slow float-delay-2" />

      {/* vormen in de achtergrond */}
      <div className="shape shape-outline-blue shape-circle left-[10%] top-[6%] w-10 h-10 float-x float-delay-3" />
      <div className="shape shape-solid-purple shape-square left-[21%] top-[15%] w-8 h-8 float-y" />
      <div className="shape shape-outline-purple shape-hex left-[33%] top-[13%] float-y-slow float-delay-2" />
      <div className="shape shape-solid-blue shape-diamond right-[16%] top-[7%] w-12 h-12 float-x" />
      <div className="shape shape-solid-blue shape-triangle left-[28%] top-[8%] float-x-reverse" />
      <div className="shape shape-outline-purple shape-square left-[12%] top-[45%] w-12 h-12 float-y-slow" />
      <div className="shape shape-solid-blue shape-circle right-[6%] top-[42%] w-14 h-14 float-x" />
      <div className="shape shape-outline-blue shape-hex right-[17%] top-[44%] float-x-reverse float-delay-1" />
      <div className="shape shape-solid-purple shape-diamond left-[26%] top-[50%] w-10 h-10 float-y" />
      <div className="shape shape-solid-purple shape-triangle right-[29%] top-[57%] float-x" />
      <div className="shape shape-outline-blue shape-circle left-[24%] top-[80%] w-14 h-14 float-y float-delay-2" />
      <div className="shape shape-solid-purple shape-square right-[22%] top-[77%] w-12 h-12 float-x float-delay-4" />
      <div className="shape shape-outline-purple shape-hex left-[34%] top-[88%] float-y-slow float-delay-3" />
      <div className="shape shape-solid-blue shape-diamond right-[15%] top-[89%] w-10 h-10 float-x float-delay-1" />

      {/* Symbols distributed within viewport */}
      <span className="symbol-bg left-[13%] top-[24%] float-x float-delay-1">{'()'}</span>
      <span className="symbol-bg right-[11%] top-[33%] float-y-slow float-delay-3">{'<>'}</span>
      <span className="symbol-bg left-[55%] top-[77%] float-y float-delay-2">{'{}'}</span>
      <span className="symbol-bg right-[21%] top-[66%] float-x-reverse">{'<>'}</span>
      <span className="symbol-bg left-[35%] top-[60%] float-x">{'()'}</span>
    </div>
  );
};
