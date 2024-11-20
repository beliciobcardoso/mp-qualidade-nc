'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useState } from 'react'

interface AproveReportProps {
  dialogButton: string
  dialogTitle: string
  dialogDescription: string
  idReport: number
}

export default function AproveReport({
  dialogButton,
  dialogTitle,
  dialogDescription,
  idReport,
}: AproveReportProps) {
  const [open, setOpen] = useState(false)
  console.log(idReport)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={() => setOpen(true)}>{dialogButton}</Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <p>{idReport}</p>
        <div className="flex justify-around">
          <Button variant={'destructive'}>Excluir</Button>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
