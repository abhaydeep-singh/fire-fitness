import { CarouselHome } from '@/components/CarouselHome'
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


function Home() {

  // function contactPop(){
  //   <Popover>
  //   <PopoverTrigger>Open</PopoverTrigger>
  //   <PopoverContent>Place content for the popover here.</PopoverContent>
  //   </Popover>

  // }

  return (
    <>

      <div className="bg-image w-full">
        <img className="" src="src/assets/gymBg.jpg" alt="" />
      </div>

      <div className="main-text absolute top-[10%] md:top-[25%] xl:top-[40%] left-[2%] lg:left-[7%]  p-3 w-[50%] ">
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold'>WELCOME TO THE GYM</h1>
        <p className='text-sm lg:text-xl italic'>Take care of your body. It's the only place you have to live.</p>
        <Popover>
          <PopoverTrigger><Button className='mt-3'>Contact Us</Button></PopoverTrigger>
          <PopoverContent>Call Us at +91-94847-62161</PopoverContent>
        </Popover>
        {/* <Button className='mt-3' onClick={contactPop}>Contact Us</Button> */}

      </div>
      {/* Workout Box */}
      <div className="workout-box mt-10  m-3 h-[477px] lg:h-[500px] flex flex-col lg:justify-end gap-4 lg:gap-7 bg-custGrey rounded-3xl p-3 lg:p-8">
        <p className='font-bold text-2xl px-5 lg:text-4xl lg:ml-24 lg:mb-8'>Discover Workouts by<br />Muscle Group</p>
        <div className="carousel w-[60%] md:w-[80%] lg:w-full mx-auto lg:my-5 flex justify-center">
          <CarouselHome />
        </div>
      </div>

      <Separator />

      {/* Gear Up */}
      <div className="gearup flex flex-col items-center mt-8">
        <p className='text-2xl md:text-3xl font-semibold'>Gear up for the perfect workout</p>
        <div className="bulletBox px-6 my-4 md:text-xl">
          <div className="point flex gap-2 my-2">
            <img src="src/assets/bullet.png" alt="" />
            <p>Reach your fitness potential with he right gear</p>
          </div>
          <div className="point flex gap-2 my-2">
            <img src="src/assets/bullet.png" alt="" />
            <p>Maximize your training with targeted</p>
          </div>
          <div className="point flex gap-2 my-2">
            <img src="src/assets/bullet.png" alt="" />
            <p>Find the perfect excercises for you</p>
          </div>

        </div>

      </div>

      {/*  */}


    </>
  )
}

export default Home
