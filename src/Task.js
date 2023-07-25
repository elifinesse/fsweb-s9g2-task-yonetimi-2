import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const date = new Date();
  const diff = differenceInDays(date, new Date(taskObj.deadline));

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span
          className={diff > 0 || diff <= -3 ? "bg-indigo-100" : "bg-[#ffd9d4]"}
        >
          {formatDistanceToNow(new Date(taskObj.deadline), {
            addSuffix: true,
            locale: tr,
          })}
        </span>
      </div>
      <p>{taskObj.description}</p>
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
