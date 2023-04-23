import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const keys = ['TOTAL', 'NAME'];
type KEYS = (typeof keys)[number];

type Storage = Record<KEYS, string>;

const storageInitialValue: Storage = {
  TOTAL: '',
  NAME: '',
};

interface UseWithStorageContextType {
  storage: Storage;
  saveItemStorage: (key: KEYS, value: string) => void;
}

export const UseWithStorageContext = createContext<UseWithStorageContextType>({
  storage: storageInitialValue,
  saveItemStorage: () => {},
});

export const UseWithStorageContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [storage, setStorage] = useState<Storage>(storageInitialValue);

  const saveItemStorage = useCallback(
    (key: KEYS, value: string) => {
      setStorage((prev) => ({ ...prev, [key]: value }));
    },
    [setStorage]
  );

  const value = useMemo<UseWithStorageContextType>(
    () => ({
      storage,
      saveItemStorage,
    }),
    [storage, saveItemStorage]
  );

  return (
    <UseWithStorageContext.Provider value={value}>
      {children}
    </UseWithStorageContext.Provider>
  );
};

export const useWithStorage = () =>
  useContext<UseWithStorageContextType>(UseWithStorageContext);
