'use client';
import { useContext } from 'react';
import dynamic from 'next/dynamic';

import ToastProvider from './toastProvider';
import ToastTrigger from './ToastButton';
import ToastModal from './ToastModal';

import { useToastContext } from './toastProvider';

export default function ToastComponent() {
  const PortalComponent = dynamic(() => import('../Modal/ModalPortal'), {
    ssr: false,
  });

  return (
    <ToastProvider>
      <ToastTrigger />
    </ToastProvider>
  );
}
