import React from "react";

const Review = () => (
  <>
    <div className="flex flex-row justify-between mt-10">
      <h1 className="text-2xl md:text-4xl lg:text-5xl  ml-5">
        Customer Reviews
      </h1>
      <button className="h-[35px] w-[125px] bg-accent px-4 py-2 rounded-xl shadow-lg">
        More
      </button>
    </div>
    <div className="flex space-x-16 animate-loop-scroll group">
      <img
        loading="lazy"
        src="https://res.cloudinary.com/dbmv3jdwr/image/upload/v1764079139/Screenshot_2025-11-24_161347_xgsymj.png"
        className="aspect-[1.11] h-80 w-80 object-contain  object-center rounded hover:paused"
      />
      <img
        loading="lazy"
        src="https://res.cloudinary.com/dbmv3jdwr/image/upload/v1764079138/Screenshot_2025-11-24_153556_ckx4fh.png"
        className="aspect-[1.11] h-80 w-80 object-contain object-center rounded hover:paused"
      />
      <img
        loading="lazy"
        src="https://res.cloudinary.com/dbmv3jdwr/image/upload/v1764079138/Screenshot_2025-11-24_161225_rs2yxu.png"
        className="aspect-[1.11]  h-80 w-80 object-contain object-center rounded-2xl hover:paused"
      />
      <img
        loading="lazy"
        src="https://res.cloudinary.com/dbmv3jdwr/image/upload/v1764079137/Screenshot_2025-11-24_150611_yen3ec.png"
        className="aspect-[1.11] h-80 w-80 object-contain object-center rounded-2xl hover:paused"
      />
      <img
        loading="lazy"
        src="https://res.cloudinary.com/dbmv3jdwr/image/upload/v1764079138/Screenshot_2025-11-24_161325_bbfniz.png"
        className="aspect-[1.11] h-80 w-80 object-contain object-center rounded-2xl hover:paused"
      />
      <img
        loading="lazy"
        src="https://res.cloudinary.com/dbmv3jdwr/image/upload/v1764079138/Screenshot_2025-11-24_153429_pjfr37.png"
        className="aspect-[1.11] h-80 w-80 object-contain object-center rounded-2xl hover:paused"
      />
      <img
        loading="lazy"
        src="https://res.cloudinary.com/dl4viyuwh/image/upload/v1764242943/Screenshot_2025-11-27_165313_xtardi.png"
        className="aspect-[1.11] h-80 w-80 object-contain object-center hover:paused"
      />
      <img
        loading="lazy"
        src="https://res.cloudinary.com/dl4viyuwh/image/upload/v1764242940/Screenshot_2025-11-27_165333_orvqok.png"
        className="aspect-[1.11] h-80 w-80 object-contain object-center hover:paused"
      />
      <img
        loading="lazy"
        src="https://res.cloudinary.com/dl4viyuwh/image/upload/v1764242940/Screenshot_2025-11-27_165333_orvqok.png"
        className="aspect-[1.11] h-80 w-80 object-contain object-center hover:paused"
      />
    </div>
  </>
);
export default Review;
