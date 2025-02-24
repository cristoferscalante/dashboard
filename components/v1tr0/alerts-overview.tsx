"use client"

import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function AlertsOverview() {
  const [totalAlerts, setTotalAlerts] = useState<number | null>(null)
  const [criticalAlerts, setCriticalAlerts] = useState<number | null>(null)
  const [warningAlerts, setWarningAlerts] = useState<number | null>(null)

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      const total = Math.floor(Math.random() * 10)
      setTotalAlerts(total)
      setCriticalAlerts(Math.floor(Math.random() * total))
      setWarningAlerts(total - criticalAlerts!)
    }, 1000)
  }, [criticalAlerts]) // Added criticalAlerts to the dependency array

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Alertas del Sistema</CardTitle>
        <AlertTriangle className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {totalAlerts !== null ? (
          <>
            <div className="text-2xl font-bold">{totalAlerts}</div>
            <p className="text-xs text-muted-foreground">Alertas Activas</p>
            <div className="mt-4 space-y-2">
              {criticalAlerts !== null && (
                <div className="text-xs text-red-500">
                  <span className="font-medium">{criticalAlerts}</span> Críticas
                </div>
              )}
              {warningAlerts !== null && (
                <div className="text-xs text-yellow-500">
                  <span className="font-medium">{warningAlerts}</span> Advertencias
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

