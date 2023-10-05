'use client'

import { useState } from "react"
import Button from "../form-control/button"
import Modal from "../modal"
import { ProductFormControls } from "@/utils/formControlsProduct"
import { useRouter } from "next/navigation"

const initData = {
  name: '',
  price: 0,
  visitors: 0,
  sales: 0,
  month: ''
}

export default function ProductLayout({children}) {
  const router = useRouter()

  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState(initData)

  const [loading, setLoading] = useState(false)

  async function handleAddProduct() {
    try {
      setLoading(true)
      const res = await fetch(`http://localhost:3000/api/product/add-product`, {
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(formData)
      })

      await res.json()
    } catch (error) {
      console.log("error catch: ", error);
      setShowModal(false)
      setFormData(initData)
    } finally {
      setShowModal(false)
      setFormData(initData)
      setLoading(false)

      router.refresh()
    }
  }

  return (
    <div>
      <Button onclick={() => setShowModal(true)} text={"Add New Product"}/>
      {children}
      <Modal 
        show={showModal}
        setShow={setShowModal}
        formData={formData}
        setFormData={setFormData}
        formcontrol={ProductFormControls}
        onAdd={handleAddProduct}
        loading={loading}
      />
    </div>
  )
}
