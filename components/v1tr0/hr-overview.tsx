"use client"

import { Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function HROverview() {
  const [employees, setEmployees] = useState<number | null>(null)
  const [newHires, setNewHires] = useState<number | null>(null)
  const [openPositions, setOpenPositions] = useState<number | null>(null)

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setEmployees(Math.floor(Math.random() * 500))
      setNewHires(Math.floor(Math.random() * 20))
      setOpenPositions(Math.floor(Math.random() * 10))
    }, 1000)
  }, [])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Resumen de RRHH</CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {employees !== null ? (
          <>
            <div className="text-2xl font-bold">{employees}</div>
            <p className="text-xs text-muted-foreground">Total de Empleados</p>
            <div className="mt-4 space-y-2">
              {newHires !== null && (
                <div className="text-xs">
                  <span className="font-medium">{newHires}</span> Nuevas Contrataciones
                </div>
              )}
              {openPositions !== null && (
                <div className="text-xs">
                  <span className="font-medium">{openPositions}</span> Posiciones Abiertas
                </div>
              )}
            </div>
          </>
        ) : (
          <p className="text-center text-muted-foreground">Cargando datos...</p>
        )}
      </CardContent>
    </Card>
  )
}

