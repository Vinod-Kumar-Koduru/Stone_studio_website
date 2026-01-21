const ElevationCardEle = ({ design }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
      <img
        src={design.image}
        alt={design.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="p-4 bg-background">
        <h3 className="text-lg font-semibold text-foreground">
          {design.title}
        </h3>
      </div>
    </div>
  );
};

export default ElevationCardEle;
