
import { ScrollArea } from '@/components/ui/scroll-area';
function Abs() {
    return (
        <div className='h-screen w-full'>
            <h1 className='font-bold text-center my-7 text-3xl'>Abs Workout</h1>
            <div className="video-container h-screen flex justify-center lg:items-center">
            <ScrollArea className="h-[600px] w-[350px] lg:w-[80%] rounded-md border p-4 flex">
                <div className='flex gap-5 flex-wrap'>
                <div className="card">
                        <iframe
                            width="300"
                            height="215"
                            src="https://www.youtube.com/embed/sHVj7pdF4mc"
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
                            src="https://www.youtube.com/embed/8PwoytUU06g"
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
                            src="https://www.youtube.com/embed/EsJM9j3NAEQ"
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
                            src="https://www.youtube.com/embed/msI80B9aGjg"
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
                            src="https://www.youtube.com/embed/HhXl6NAxUAo"
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
    );
}

export default Abs;
