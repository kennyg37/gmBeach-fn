import Header from './Header';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/4.jpg')" }}>
      <Header className="text-white" />
      
      {/* New overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/80 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
       
      </div>
    </div>
  );
};

export default Hero;