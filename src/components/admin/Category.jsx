import React from 'react';

const Category =({category, changeHandler})=>(
    <select 
    className="w-full text-base py-2 focus:outline-none border border-black" 
    value={category} 
    onChange={(e)=>changeHandler(e.target.value)}
  >
    <option value="audio">Audio</option>
    <option value="video">Video</option>
    <option value="gospel">Gospel</option>
    <option value="highlife">HighLife</option>
  </select>
)

export default Category;