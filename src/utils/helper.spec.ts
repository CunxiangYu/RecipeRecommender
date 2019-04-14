import { isBeforeToday } from './helper';

// Mock Date.now() to always return the date of '2019-04-14'
Date.now = jest.fn(() => new Date(Date.UTC(2019, 3, 14)).valueOf());

describe('helper', () => {
  describe('isBeforeToday', () => {
    it(`should return true when passing a date which is before today (2019-04-14)`, () => {
      expect(isBeforeToday('2019-04-04')).toBe(true);
      expect(isBeforeToday('2019-04-03')).toBe(true);
      expect(isBeforeToday('2019-03-12')).toBe(true);
      expect(isBeforeToday('2019-02-04')).toBe(true);
    });

    it(`should return false when passing a date which is past today (2019-04-14)`, () => {
      expect(isBeforeToday('2019-04-22')).toBe(false);
      expect(isBeforeToday('2019-04-16')).toBe(false);
      expect(isBeforeToday('2019-05-12')).toBe(false);
      expect(isBeforeToday('2019-07-04')).toBe(false);
    });

    it(`should return false when passing a date which is today (2019-04-14)`, () => {
      expect(isBeforeToday('2019-04-14')).toBe(false);
    });
  });
});
