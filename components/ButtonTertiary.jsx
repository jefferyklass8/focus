const ButtonTertiary = ({ btnText }) => {
  return (
    <button className="relative min-w-[184px] inline-flex justify-center items-center px-6 py-[18px] overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group bg-[#0e1135] hover:bg-[#151a41] text-white uppercase tracking-[1px] text-sm">
      {btnText}
    </button>
  );
};

export default ButtonTertiary;
