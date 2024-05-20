import ModalPortal from '../Modal/ModalPortal.js';
import Toaster from './ToastComponents';

export default function ToastModal() {
  return (
    <ModalPortal>
      <Toaster>
        <Toaster.Container>
          <Toaster.Title>토스트 타이틀이지요</Toaster.Title>
          <Toaster.Description>토스트의 설명란입니다.👁️</Toaster.Description>
        </Toaster.Container>
        <Toaster.Button />
      </Toaster>
    </ModalPortal>
  );
}
