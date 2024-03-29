'use client';

type Props = {};

const BuyNow = (props: Props) => {
  return (
    <button
      onClick={() => {
        console.log('sm');
      }}
      className="relative rounded px-5 py-2.5 overflow-hidden group bg-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300"
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative">Buy Now</span>
    </button>
  );
};

export default BuyNow;
