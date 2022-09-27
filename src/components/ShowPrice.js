import React, { useState, useEffect } from "react";
import PriceContext from "./PriceGenerator";
import { useContext } from "react";

export default function ShowPrice() {
  const [price] = useContext(PriceContext);
  const [open, setOpen] = useState(false);

  function addToDataLayer() {
    window.dataLayer.push({
      event: "gtm.click",
      price,
    });
  }
  /* eslint-disable */
  useEffect(() => {
    if (open) {
      addToDataLayer();
    }
  }, [open]);

  return (
    <div id="price" className="" onClick={() => setOpen(true)}>
      {open ? (
        <div className="">
          <div className="animate-[moveout_.2s_ease-out_forwards]">
            <h2 className="min-w-max text-center absolute text-3xl font-bold tracking-tight text-offwhite sm:block sm:text-4xl lg:text-left">
              <span className=" text-orange-200">+ See Pricing</span>
            </h2>
          </div>
          <div
            className="animate-[movein_.2s_ease-in_forwards] "
            id="price_visible"
          >
            <h2 className="min-w-max text-center absolute text-3xl font-bold tracking-tight text-offwhite sm:block sm:text-4xl lg:text-left  ">
              Subscription only{" "}
              <span className=" text-orange-200">{price} / month</span>
            </h2>
          </div>
        </div>
      ) : (
        <div id="seemore">
          <h2 className="min-w-max cursor-pointer absolute text-3xl font-bold tracking-tight text-offwhite sm:block sm:text-4xl hover:text-orange-200">
            <span className=" text-orange-200">+ </span> See Pricing
          </h2>
        </div>
      )}
    </div>
  );
}
