"use client";
import Image from "next/image";
import { useState } from "react";
import { CarCardProps } from "@/types";
import { CustomButton } from ".";

interface CarProps {
  car: CarCardProps;
}

const CarCard = ({ car }: CarProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [first, setfirst] = useState("");

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p>
        <span>Car Rent...</span>
      </p>
    </div>
  );
};

export default CarCard;
