'use client'

import { Input } from "@nextui-org/input";
import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from "@nextui-org/react";
import { FormEvent } from "react";

export const ModalNewProductFrom = () => { 

  const categories = [
    {
      id: 1,
      name: "Category 1"
    },
    {
      id: 2,
      name: "Category 2"
    },
    {
      id: 3,
      name: "Category 3"
    },
    {
      id: 4,
      name: "Category 4"
    },
    {
      id: 5,
      name: "Category 5"
    },

  ]

  const handleSubmit = async (e: FormEvent) =>{
    e.preventDefault();
    const { productName, price, categoryId } = e.target as HTMLFormElement;

    console.log(productName.value, price.value, categoryId.value);
    // OBTENER LOS DATOS DEL FORMULARIO

    // VALIDACION DE LOS DATOS

    // TODO: creaate producto action

    // LIMPIAR DATOS Y CERRAR MODAL
  }

  return (
    <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Registra un nuevo producto</ModalHeader>
              <ModalBody>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <Input
                    label="Nombre del producto"
                    fullWidth
                    name="productName"
                  />
                  <Input
                    label="Precio del producto"
                    fullWidth
                    type="number"
                    name="price"
                    min={0}
                    step={0.01}
                  />
                  <Select label = "Categoria de Producto"
                    placeholder = "Seleciona el producto"
                    name="categoryId"
                    >
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </Select>

                  <Input
                    fullWidth
                    type="file"
                    name="image"
                  />

                  <div className="flex justify-end gap-4 mt-4 mb-[12rem] items-center">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cancelar
                    </Button>
                    <Button color="primary" type="submit">
                      Guardar
                    </Button>
                  </div>
                  
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
    
  );
}