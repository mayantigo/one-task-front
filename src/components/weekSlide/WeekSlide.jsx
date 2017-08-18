import React from 'react';
import WeekDay from '../weekDay';

const WeekSlide = () =>
  (<div>
    <WeekDay name="Monday" onSelect={evt => alert(evt)} />
    <WeekDay name="Tuesday" onSelect={evt => alert(evt)} />
    <WeekDay name="Wednesday" onSelect={evt => alert(evt)} />
    <WeekDay name="Thursday" onSelect={evt => alert(evt)} />
    <WeekDay name="Friday" onSelect={evt => alert(evt)} />
    <WeekDay name="Saturday" onSelect={evt => alert(evt)} />
    <WeekDay name="Sunday" onSelect={evt => alert(evt)} />
  </div>);

export default WeekSlide;
