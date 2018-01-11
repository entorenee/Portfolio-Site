/* eslint-disable array-callback-return */
import quotes from '../src/assets/js/quotesData';

describe('Quotes Data', () => {
  it('exports an array', () => {
    expect(Array.isArray(quotes)).toBe(true);
  });

  it('should have at least one item', () => {
    expect(quotes.length).toBeGreaterThan(0);
  });

  it('each index in the array is an object', () => {
    quotes.map(quote => {
      expect(typeof quote).toBe('object');
    });
  });

  it('should have a truthy `quote` key', () => {
    quotes.map(quote => {
      expect(Object.prototype.hasOwnProperty.call(quote, 'quote')).toBe(true);
      expect(quote.quote).toBeTruthy();
    });
  });

  it('should have a truthy `attribution` key', () => {
    quotes.map(quote => {
      expect(Object.prototype.hasOwnProperty.call(quote, 'attribution')).toBe(true);
      expect(quote.attribution).toBeTruthy();
    });
  });
});
