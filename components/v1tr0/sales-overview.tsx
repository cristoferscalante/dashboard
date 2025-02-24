"use client"

import { ShoppingCart, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function SalesOverview() {
  const [totalOrders, setTotalOrders] = useState<number | null>(null)
  const [percentage, setPercentage] = useState<number | null>(null)

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setTotalOrders(Math.floor(Math.random() * 1000))
      setPercentage(Number((Math.random() * 10).toFixed(1)))
    }, 1000)
  }, [])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Resumen de Ventas</CardTitle>
        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {totalOrders !== null ? (
          <>
            <div className="text-2xl font-bold">{totalOrders}</div>
            <p className="text-xs text-muted-foreground">Total de Pedidos Este Mes</p>
            {percentage !== null && (
              <div className="mt-4 flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-xs font-medium text-green-500">+{percentage}%</span>
                <span className="text-xs text-muted-foreground">desde el mes pasado</span>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-muted-foreground">Cargando datos...</p>
        )}
      </CardContent>
    </Card>
  )
}

