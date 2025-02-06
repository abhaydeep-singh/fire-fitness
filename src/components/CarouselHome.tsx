import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

export function CarouselHome() {
  // Array of workout images and their corresponding names
  const workouts = [
    { src: "src/assets/workout/bicep.jpg", name: "Arms" },
    { src: "src/assets/workout/chest.jpg", name: "Chest" },
    { src: "src/assets/workout/leg.jpg", name: "Legs" },
    { src: "src/assets/workout/shoulder.jpg", name: "Shoulders" },
    { src: "src/assets/workout/abs.jpg", name: "Abs" },
    { src: "src/assets/workout/back.jpg", name: "Back" },
  ];

  const navigate = useNavigate();

  function handleCardClick(page: string){
    navigate(`/${page.toLowerCase()}`);
  }

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm lg:max-w-6xl" // max-w-sm was default
    >
      <CarouselContent>
        {workouts.map((workout, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1">
              <Card  
                onClick={() => handleCardClick(workout.name)}
                className="cursor-pointer"
                >
                <CardContent className="relative flex aspect-square items-center justify-center p-0">
                  {/* Image */}
                  <img
                    src={workout.src}
                    alt={`Workout ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold rounded-lg">
                    {workout.name}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
