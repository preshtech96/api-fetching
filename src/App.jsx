import React from "react";
import { countstore12 } from "../storhouse1";
import Card from "../component/Card";
import preshtech from "./assets/preshtech.png"

function App() {
  const newData = countstore12();
  const { value1, fetchdata } = newData;
  console.log(value1);
  console.log(newData);
  return (
    <div>
      {/* <h1>App</h1> */}
      <div className="flex flex-row justify-around p-5 bg-blue-900 ">
        <div>
          <img className="h-10 w-10" src={preshtech} alt="Preshtech" />
        </div>
        <div>
        <button className="text-white font-bold cursor-pointer hover:text-orange-800" onClick={fetchdata}>Fetch News</button>
        </div>
      
      </div>
      
      {value1.map((item, index) => {
        return (
          <Card
            key={index}
            img={item.photo_url}
            title={item.title}
            date={item.published_datetime_utc}
            snippet={item.snippet}
            source={item.source_name}
            slink={item.source_url}
            storyid={item.story_id}
            data={item}
          />
        );
      })}
    </div>
  );
}

export default App;
