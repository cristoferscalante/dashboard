"use client"

import { DollarSign, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function FinanceOverview() {
  const [revenue, setRevenue] = useState<number | null>(null)
  const [percentage, setPercentage] = useState<number | null>(null)

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setRevenue(Math.floor(Math.random() * 1000000))
      setPercentage(Math.random() * 10 - 5)
    }, 1000)
  }, [])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Resumen Financiero</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {revenue !== null ? (
          <>
            <div className="text-2xl font-bold">${revenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Ingresos Totales</p>
            {percentage !== null && (
              <div className="mt-4 flex items-center space-x-2">
                {percentage > 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <span className={`text-xs font-medium ${percentage > 0 ? "text-green-500" : "text-red-500"}`}>
                  {percentage.toFixed(1)}%
                </span>
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

