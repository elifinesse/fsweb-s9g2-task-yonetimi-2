import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const date = new Date();
  const diff = differenceInDays(date, new Date(taskObj.deadline));
  let bgColor;
  if (diff > 0) {
    bgColor = "bg-red-800 text-white";
  } else if (diff <= 0 && diff >= -3) {
    bgColor = "bg-[#ffd9d4]";
  } else {
    bgColor = "bg-indigo-100";
  }

  return (
    <div className="p-6 bg-white rounded leading-6 mt-4 shadow-md">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span className={bgColor}>
          {formatDistanceToNow(new Date(taskObj.deadline), {
            addSuffix: true,
            locale: tr,
          })}
        </span>
      </div>
      <p className="text-sm	text-[#444] pt-2 pb-3">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-md rounded border-0 cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
