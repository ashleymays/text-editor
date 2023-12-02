import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '../useLocalStorage';

it('should return the initial value', () => {
  const initialValue = '';
  const { result } = renderHook(() => useLocalStorage('test', initialValue));
  expect(result.current.item).toBe(initialValue);
});

// it("should set storage item to 'testing'", () => {
//   const value = 'testing';
//   const { result } = renderHook(() => useLocalStorage('test', ''));
//   act(() => {
//     result.current.setItem(value);
//   });
//   expect(result.current.item).toBe(value);
// });
