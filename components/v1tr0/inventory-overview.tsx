"use client"

import { Package } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function InventoryOverview() {
  const [totalItems, setTotalItems] = useState<number | null>(null)
  const [lowStock, setLowStock] = useState<number | null>(null)
  const [outOfStock, setOutOfStock] = useState<number | null>(null)

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setTotalItems(Math.floor(Math.random() * 10000))
      setLowStock(Math.floor(Math.random() * 100))
      setOutOfStock(Math.floor(Math.random() * 50))
    }, 1000)
  }, [])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Resumen de Inventario</CardTitle>
        <Package className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {totalItems !== null ? (
          <>
            <div className="text-2xl font-bold">{totalItems.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Total de Artículos en Stock</p>
            <div className="mt-4 space-y-2">
              {lowStock !== null && (
                <div className="text-xs">
                  <span className="font-medium">{lowStock}</span> Artículos con Bajo Stock
                </div>
              )}
              {outOfStock !== null && (
                <div className="text-xs">
                  <span className="font-medium">{outOfStock}</span> Artículos Agotados
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

