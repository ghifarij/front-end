import Image from "next/image";
import ecommerce from "../../assets/ecommerce.png";
import weather from "../../assets/weather.jpg";
import todolist from "../../assets/todolist.png";

function ProjectItem() {
  return (
    <div className="flex flex-wrap text-white justify-between mx-[100px] my-[20px] gap-[50px]">
      <div className="bg-[#222831] md:w-[500px] md:h-[400px] border-2 border-solid border-yellow-500 rounded text-center">
        <Image
          src={ecommerce}
          alt="ecommerce"
          className="ecommerce p-[10px] w-[500px] h-[225px] object-cover"
        />
        <figcaption className="font-medium mb-[5px]">E-Commerce App</figcaption>
        <p className="text-left mx-[20px]">
          E-Commerce app make it easy for customers to browse, review, select,
          and purchase items with just a few taps. They can view product
          details, add items to their cart, and complete secure transactions
          from anywhere.
        </p>
      </div>
      <div className="bg-[#222831] md:w-[500px] md:h-[400px] border-2 border-solid border-yellow-500 rounded text-center">
        <Image
          src={weather}
          alt="weather"
          className="weather p-[10px] w-[500px] h-[225px] object-cover"
        />
        <figcaption className="font-medium mb-[5px]">Weather App</figcaption>
        <p className="text-left mx-[20px]">
          The Weather App offers the following key features: Current Location
          Weather: The app utilises the browser's geolocation functionality to
          automatically detect the user's current location and display the
          corresponding weather information, including temperature, weather
          conditions, humidity, and wind speed.
        </p>
      </div>
      <div className="bg-[#222831] md:w-[500px] md:h-[400px] border-2 border-solid border-yellow-500 rounded text-center">
        <Image
          src={todolist}
          alt="todolist"
          className="todolist p-[10px] w-[500px] h-[225px] object-cover"
        />
        <figcaption className="font-medium mb-[5px]">To-Do List App</figcaption>
        <p className="text-left mx-[20px]">
          To-do list as a productivity planner app, is dedicated to helping
          users track things to do, make daily planners and provide important
          task reminders for free.
        </p>
      </div>
    </div>
  );
}

export default ProjectItem;
