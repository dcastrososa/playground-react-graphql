import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react';
import {
  UseWithStorageContextProvider,
  useWithStorage,
} from './useStateWithStorage';

describe('useWithStorage', () => {
  test('should return the storage and saveItemStorage function', () => {
    const { result } = renderHook(() => useWithStorage(), {
      wrapper: UseWithStorageContextProvider,
    });

    expect(result.current.storage).toEqual({
      TOTAL: '',
      NAME: '',
    });
    expect(typeof result.current.saveItemStorage).toBe('function');
  });

  test('should update the storage when saveItemStorage is called', () => {
    const { result } = renderHook(() => useWithStorage(), {
      wrapper: UseWithStorageContextProvider,
    });

    expect(result.current.storage).toEqual({
      TOTAL: '',
      NAME: '',
    });

    act(() => {
      result.current.saveItemStorage('TOTAL', '100');
    });

    expect(result.current.storage).toEqual({
      TOTAL: '100',
      NAME: '',
    });
  });
});
