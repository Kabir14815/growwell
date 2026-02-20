import React from 'react'
import { FaUsers, FaUserGraduate, FaPersonChalkboard, FaHeart } from "react-icons/fa6";

const stats = [
  { icon: <FaUserGraduate className="text-3xl text-[#ff9900]" />, number: '500+', label: 'Happy Students' },
  { icon: <FaPersonChalkboard className="text-3xl text-[#ff9900]" />, number: '30+', label: 'Expert Teachers' },
  { icon: <FaHeart className="text-3xl text-[#ff9900]" />, number: '400+', label: 'Happy Parents' },
  { icon: <FaUsers className="text-3xl text-[#ff9900]" />, number: '15+', label: 'Years of Excellence' }
];

const StatsSection = () => {
  return (
    <div className="w-full py-16 bg-[#000066]">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-12 sm:gap-16">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-white text-center">
            <div className="mb-3">{stat.icon}</div>
            <span className="text-2xl sm:text-3xl font-semibold text-[#ff9900]">{stat.number}</span>
            <span className="text-base sm:text-[1.05rem] text-zinc-200 mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsSection
