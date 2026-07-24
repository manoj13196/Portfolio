const BackgroundEffects = () => {
  return (
    <>
      {/* GRID */}

      <div
        className="
          fixed
          inset-0
          z-[-1]
          opacity-[0.03]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.1) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* BLUR EFFECTS */}

      <div
        className="
          fixed
          top-0
          left-0
          w-[400px]
          h-[400px]
          bg-blue-500/10
          blur-3xl
          rounded-full
          z-[-1]
        "
      />

      <div
        className="
          fixed
          bottom-0
          right-0
          w-[400px]
          h-[400px]
          bg-purple-500/10
          blur-3xl
          rounded-full
          z-[-1]
        "
      />
    </>
  );
};

export default BackgroundEffects;