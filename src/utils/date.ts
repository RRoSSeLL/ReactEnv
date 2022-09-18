/**
 * Array containing the weekdays with index reflecting the ones returned from Date().getDay()
 * @constant
 * @type {string[]}
 */

export const weekDays : string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

/**
 * Functions that gets the common name for the current day of the week
 * @returns string
 */

export const getWeekday = () : string => weekDays[new Date().getDay()];