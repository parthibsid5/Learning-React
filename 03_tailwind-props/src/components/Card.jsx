import React from 'react'

function Card({username ,hasTags="#photograpy"}){
    console.log("props : ",{username});
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
  <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div class="font-bold text-xl mb-2 ">{username}</div>
    <p className="text-white-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hasTags || "#photography"}</span> */}
    
    {/* || suggests the default value  */}

    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hasTags}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    )
}


export default Card