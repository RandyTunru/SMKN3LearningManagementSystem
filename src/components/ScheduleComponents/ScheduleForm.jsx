import React, { useState } from 'react';
import { classes } from './ScheduleData';

const ScheduleForm = ({ addSchedule }) => {
  const [teacher, setTeacher] = useState('');
  const [subject, setSubject] = useState('');
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [className, setClassName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSchedule({ className, teacher, subject, day, startTime, endTime });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={teacher}
        onChange={(e) => setTeacher(e.target.value)}
        placeholder="Teacher Name"
        required
      />
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        required
      />
      <select value={className} onChange={(e) => setClassName(e.target.value)} required>
        <option value="">Select Class</option>
        {classes.map((cls) => (
          <option key={cls} value={cls}>{cls}</option>
        ))}
      </select>
      <select value={day} onChange={(e) => setDay(e.target.value)} required>
        <option value="">Select Day</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        required
      />
      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        required
      />
      <button type="submit">Add Schedule</button>
    </form>
  );
};

export default ScheduleForm;
