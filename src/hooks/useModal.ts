import { useState, useCallback } from 'react';

export type ModalMode = 'login' | 'register';

export function useModal() {
  const [mode, setMode] = useState<ModalMode | null>(null);

  const openLogin = useCallback(() => setMode('login'), []);
  const openRegister = useCallback(() => setMode('register'), []);
  const close = useCallback(() => setMode(null), []);

  return {
    mode,
    isOpen: mode !== null,
    openLogin,
    openRegister,
    close,
  };
}
