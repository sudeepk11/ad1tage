import React from 'react'
import Link from 'next/link'
const MapMarker = ({ paraText, subParaText, rating, photos, id }) => {
    return (
        <div>
            <Link href={`/service-details/${id}`}>
                <div className="relative w-36 flex max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                    <a className="relative mx-2 mt-2 flex h-24 overflow-hidden rounded-xl" href="#">
                        <img className="object-cover" src={photos} alt="product image" />
                    </a>
                    <div className="mt-2 mb-2 px-2">
                        <a href="#">
                            <h5 className="text-md tracking-tight text-slate-900"> {paraText}</h5>
                        </a>
                        <a href="#">
                            <h5 className="text-md tracking-tight text-primary">{subParaText}</h5>
                        </a>
                        <div className="  flex items-center justify-between">
                            <div className="flex items-center ">
                                <span className='font-semibold'>Rating: </span> &nbsp; <span className='text-primary'> {rating}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </div >
    )
}

export default MapMarker