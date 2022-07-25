import { expect, it } from 'vitest';
import { combinations } from './combinations';

it('combinations works correctly', () => {
  expect(combinations(2, 4)).toEqual(6);
  expect(combinations(2, 52)).toEqual(1326);
  expect(combinations(7, 52)).toEqual(133784560);
});
