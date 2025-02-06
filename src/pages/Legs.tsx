import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
function Legs() {
  return (
    <div className='h-screen w-full'>
    <h1 className='font-bold text-center my-7 text-3xl'>Legs Workout</h1>
    <div className="video-container h-screen flex justify-center lg:items-center">
    <ScrollArea className="h-[600px] w-[350px] lg:w-[80%] rounded-md border p-4 flex">
        <div className='flex gap-5 flex-wrap'>
        <div className="card">
                <iframe
                    width="300"
                    height="215"
                    src="https://www.youtube.com/embed/IBp9TOCGIJI"
                    title="YouTube video player"
                    //   frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="card">
                <iframe
                    width="300"
                    height="215"
                    src="https://www.youtube.com/embed/EZQMBYoFoRs"
                    title="YouTube video player"
                    //   frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="card">
                <iframe
                   width="300"
                    height="215"
                    src="https://www.youtube.com/embed/aPq_fapLGyk"
                    title="YouTube video player"
                    //   frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="card">
                <iframe
                    width="300"
                    height="215"
                    src="https://www.youtube.com/embed/WA23NHfNq-s"
                    title="YouTube video player"
                    //   frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="card">
                <iframe
                    width="300"
                    height="215"
                    src="https://www.youtube.com/embed/5X1RSXUVuSA"
                    title="YouTube video player"
                    //   frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </ScrollArea>

    </div>
</div>
  )
}

export default Legs
