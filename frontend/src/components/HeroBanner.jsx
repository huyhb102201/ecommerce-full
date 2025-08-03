const HeroBanner = () => {
  return (
    <section className="relative w-full h-[600px] bg-gray-100 mt-[70px]">
      <img
        src="../images/banner2.webp"
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-black max-w-xl">
        <span className="bg-white text-sm font-semibold px-4 py-1 rounded mb-4 inline-block">
          IPHONE 16 PRO MAX
        </span>
        <h1 className="text-4xl font-bold mb-4">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipisicing elit.
        </h1>
        <p className="text-lg mb-6">
          Get incredible deals, up to <strong>12%</strong> off
        </p>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
