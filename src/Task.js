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
    <div className="task">
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
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
