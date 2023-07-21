import { useEffect, useState } from "react";

interface Props {
  getDiscNumber: (value: number) => void;
}

const DiscSlider = ({ getDiscNumber }: Props) => {
  const [sliderValue, setSliderValue] = useState(4);

  useEffect(() => {
    getDiscNumber(sliderValue);
  }, [sliderValue]);

  return (
    <div className="m-2">
      <label className="text-center text-white">Discs Number</label>
      <input
        type="range"
        min="1"
        max="10"
        value={sliderValue}
        onChange={(e) => setSliderValue(parseInt(e.target.value))}
        className={` h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-600`}
      />
    </div>
  );
};

export default DiscSlider;
