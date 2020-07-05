import React from 'react';


const ImageCard = () =>{

    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src="https://source.unsplash.com/random" alt="" className="w-full" />
        <div className='px-6 py-4'>
          <div className='font-bold text-purple-500 text-xl mb-2'>
          PHOTO by HOHN DOE
          </div>
        </div>
        <ul>
            <li>
                <strong>Views:</strong>
                3000
            </li>
            <li>
                <strong>Downloads:</strong>
                7348
            </li>
            <li>
                <strong>Likes:</strong>
                8374
            </li>
        </ul>
        <div className='px-6 py-4'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                tag1
            </span>
        </div>
      </div>
    )
}

export default ImageCard;