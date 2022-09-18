import { getWeekday } from 'utils/date';

describe('Test Date Utils', () => {
  it('Returns the day of the week', () => {
    cy.clock().then(clock => {
      clock.setSystemTime(new Date('2022-01-01T00:00:00'));
      expect(getWeekday()).to.eq('Saturday');
      clock.setSystemTime(new Date('2022-02-01T00:00:00'));
      expect(getWeekday()).to.eq('Tuesday');
      clock.setSystemTime(new Date('2022-03-01T00:00:00'));
      expect(getWeekday()).to.eq('Tuesday');
      clock.setSystemTime(new Date('2021-05-01T00:00:00'));
      expect(getWeekday()).to.eq('Saturday');
      clock.setSystemTime(new Date('1999-04-01T00:00:00'));
      expect(getWeekday()).to.eq('Thursday');
      clock.setSystemTime(new Date('2022-09-01T00:00:00'));
      expect(getWeekday()).to.eq('Thursday');
      clock.setSystemTime(new Date('2024-11-21T00:00:00'));
      expect(getWeekday()).to.eq('Thursday');
      clock.setSystemTime(new Date('2027-07-07T00:00:00'));
      expect(getWeekday()).to.eq('Wednesday');
      clock.setSystemTime(new Date('1480-01-01T00:00:00'));
      expect(getWeekday()).to.eq('Thursday');
      clock.setSystemTime(new Date('3000-01-01T00:00:00'));
      expect(getWeekday()).to.eq('Wednesday');
    });
  });
});