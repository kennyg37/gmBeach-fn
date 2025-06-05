const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-95">
      <h1 className="text-4xl font-extrabold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-amber-500">
        GOOD <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-300">MOOD</span>
      </h1>
      <p className="text-base italic text-gray-700 mt-[-2px] tracking-wide font-light">
        Beach Resort
      </p>
    </div>
  );
};

export default Logo;