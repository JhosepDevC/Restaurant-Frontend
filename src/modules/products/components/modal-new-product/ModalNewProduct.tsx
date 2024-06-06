'use client'
import { Button, Modal, useDisclosure } from '@nextui-org/react';
import { ModalNewProductFrom } from './ModalNewProductFrom';


export const ModalNewProduct = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button color='primary' variant='shadow' onPress={onOpen}>Crear Producto</Button>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalNewProductFrom/>
      </Modal>
    </>
  );
}
