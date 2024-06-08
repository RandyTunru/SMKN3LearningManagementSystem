import React, { useState } from 'react';
import ScheduleForm from './ScheduleForm';
import { initialSchedules } from './ScheduleData';

const ScheduleManager = () => {
  const [schedules, setSchedules] = useState(initialSchedules);

  const addSchedule = (newSchedule) => {
    if (isConflict(newSchedule, schedules)) {
      alert('Schedule conflict detected!');
    } else {
      setSchedules([...schedules, newSchedule]);
    }
  };

  const isConflict = (newSchedule, schedules) => {
    return schedules.some((schedule) => {
      return (
        schedule.class === newSchedule.class &&
        schedule.day === newSchedule.day &&
        ((newSchedule.startTime >= schedule.startTime && newSchedule.startTime < schedule.endTime) ||
          (newSchedule.endTime > schedule.startTime && newSchedule.endTime <= schedule.endTime) ||
          (newSchedule.startTime <= schedule.startTime && newSchedule.endTime >= schedule.endTime))
      );
    });
  };
  
  
  return (
    <div>
      <h1>Schedule Manager</h1>
      <ScheduleForm addSchedule={addSchedule} />
      <ul>
        {schedules.map((schedule, index) => (
          <li key={index}>
            {schedule.class} - {schedule.teacher} - {schedule.subject} - {schedule.day} - {schedule.startTime} to {schedule.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleManager;
