import React from "react";

/**
 * Props:
 * - name
 * - role
 * - img (url)
 */
export default function CourseCard({ name = " استاد", role = "مدرس", img = null }) {
  return (
    <div className="relative w-[260px] sm:w-[300px] md:w-[340px] h-[340px] sm:h-[380px] md:h-[420px] flex items-center justify-center">

      <div
        aria-hidden
        className="absolute inset-0 rounded-[28px] blur-[14px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(165,120,255,0.28) 0%, rgba(165,120,255,0.12) 25%, transparent 40%)",
          transform: "translateY(6px)",
        }}
      />


      <div className="absolute inset-0 m-3 rounded-[22px] pointer-events-none" />


      <div
        dir="ltr"
        className="relative z-10 w-full h-full rounded-[18px] overflow-hidden flex items-end"
        style={{
          backgroundImage: img ? `url(${img})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      


        <div className="relative z-20 w-full px-4 pb-6">
          <div className="text-right">
            <div className="text-white text-lg  mr-8 sm:text-xl font-extrabold">{name}</div>
            <div className="text-white/80 text-sm mb-8 mr-8 sm:text-sm mt-1">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
