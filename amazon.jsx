import React from "react";
import { employeedata } from "./employeedata";
import Card1 from "./card1";
import  './amazon.css'
export default function Amazon({handelclick}) {
  return (
    <>
      <section className="section">
        {employeedata.map((item) => (
          <Card1 key={item.id} item={item} handelclick={handelclick} />
        ))}
      </section>
    </>
  );
}


