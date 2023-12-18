const Services = ({ icon, title, desc }) => {
  return (
    <div className="w-48">
      <div className="w-48 h-48 bg-white">
        <p>{icon}</p>
        <p>{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Services;
