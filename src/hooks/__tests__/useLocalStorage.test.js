import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '../useLocalStorage';

function cleanUp() {
  window.localStorage.setItem('test', null);
}

it('should initialize the storage item', () => {
  const initialValue = '';
  const { result } = renderHook(() => useLocalStorage('test', initialValue));
  const value = result.current[0];
  expect(value).toBe(initialValue);
  cleanUp();
});

it('should update storage items', () => {
  const { result } = renderHook(() => useLocalStorage('test', 1234));
  const setValue = result.current[1];
  const updatedValue = 'testing';

  act(() => {
    setValue(updatedValue);
  });

  const value = result.current[0];

  expect(value).toBe(updatedValue);
  cleanUp();
});

it('should return empty string for undefined initial value', () => {
  const { result } = renderHook(() => useLocalStorage('test'));
  const value = result.current[0];
  expect(value).toBe('');
  cleanUp();
});
