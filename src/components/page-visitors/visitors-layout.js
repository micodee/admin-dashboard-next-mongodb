'use client'

import { useState } from "react"
import Button from "../form-control/button"
import Modal from "../modal"
import { useRouter } from "next/navigation"
import { VisitorsFormControls } from "@/utils/formControlsVisitors"
import { AddVisitors } from "@/services/visitors"

const initData = {
  visitors: 0,
  premiumUserNo: 0,
  location: '',
  device: '',
  month: ''
}

export default function VisitorsLayout({children}) {
  const router = useRouter()

  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState(initData)

  const [loading, setLoading] = useState(false)

  async function handleAddVisitors() {
    try {
      setLoading(true)
      await AddVisitors(formData)

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
      <Button onclick={() => setShowModal(true)} text={"Add Visitors Info"}/>
      {children}
      <Modal 
        show={showModal}
        setShow={setShowModal}
        formData={formData}
        setFormData={setFormData}
        formcontrol={VisitorsFormControls}
        onAdd={handleAddVisitors}
        loading={loading}
      />
    </div>
  )
}
