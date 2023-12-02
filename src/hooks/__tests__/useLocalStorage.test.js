import { test, expect, renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from '../u';

test('should return the initial value', () => {
  const initialValue = '';
  const { result } = renderHook(() => useLocalStorage('test', initialValue));
  expect(result.current.item).toBe(initialValue);
});

test("should set storage item to 'testing'", () => {
  const value = 'testing';
  const { result } = renderHook(() => useLocalStorage('test', ''));
  act(() => {
    result.current.setItem(value);
  });
  expect(result.current.item).toBe(value);
});
