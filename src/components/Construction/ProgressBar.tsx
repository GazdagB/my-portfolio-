



const ProgressBar = ({ precent = 0,  }) => {
  return (
    <div className="w-100">
      <p className="text-center mb-3">Progress</p>
      <div className="w-full mb-15 h-2 border border-charcoal rounded-full relative">
        <div
          style={{ width: `${precent}%` }}
          className="mb-2 bg-[#fb7d22] h-full rounded-full"
        ></div>
        <p className="font-medium font-t-sans" style={{marginLeft: `${precent}%`}} >{precent}%</p>
      </div>
     
    </div>
  );
};

export default ProgressBar;