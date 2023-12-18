const Services = ({ icon, title, desc }) => {
  return (
    <div className="grid grid-cols-4">
      <div className="flex">
        <div className="w-48 h-48 bg-white">
          <p>{icon}</p>
          <p>{title}</p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
