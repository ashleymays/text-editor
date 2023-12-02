import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '../useLocalStorage';

it('should initialize the storage item', () => {
  const initialValue = '';
  const { result } = renderHook(() => useLocalStorage('test', initialValue));
  const value = result.current[0];
  expect(value).toBe(initialValue);
});

it("should update storage item to 'testing'", () => {
  const { result } = renderHook(() => useLocalStorage('test', 1234));
  const setValue = result.current[1];
  const updatedValue = 'testing';

  act(() => {
    setValue(updatedValue);
  });

  const value = result.current[0];

  expect(value).toBe(updatedValue);
});
