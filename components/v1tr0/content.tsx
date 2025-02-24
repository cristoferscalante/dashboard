"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { DollarSign, Users, Package, ShoppingCart, TrendingUp, TrendingDown } from "lucide-react"

interface OverviewCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  trend?: {
    value: string
    positive: boolean
  }
}

function OverviewCard({ title, value, description, icon, trend }: OverviewCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend && (
          <div className="mt-4 flex items-center space-x-2">
            {trend.positive ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
            <span className={`text-xs font-medium ${trend.positive ? "text-green-500" : "text-red-500"}`}>
              {trend.value}
            </span>
            <span className="text-xs text-muted-foreground">desde el mes pasado</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function Content() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Panel de Control</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCard
          title="Ingresos Totales"
          value="$45,231.89"
          description="Ingresos del mes actual"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: "+20.1%", positive: true }}
        />
        <OverviewCard
          title="Empleados Activos"
          value="246"
          description="Total de empleados"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: "+3.2%", positive: true }}
        />
        <OverviewCard
          title="Inventario"
          value="1,234"
          description="Productos en stock"
          icon={<Package className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: "-4.5%", positive: false }}
        />
        <OverviewCard
          title="Ventas"
          value="$12,345.67"
          description="Ventas del mes actual"
          icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: "+8.3%", positive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p className="text-sm text-muted-foreground">Cargando actividades...</p>
            ) : (
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Nueva venta registrada</p>
                    <p className="text-sm text-muted-foreground">Venta #1234 por $1,234.56</p>
                  </div>
                  <div className="ml-auto font-medium">Hace 5 min</div>
                </div>
                <div className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Actualización de inventario</p>
                    <p className="text-sm text-muted-foreground">15 productos actualizados</p>
                  </div>
                  <div className="ml-auto font-medium">Hace 15 min</div>
                </div>
                <div className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Nuevo empleado registrado</p>
                    <p className="text-sm text-muted-foreground">Juan Pérez - Departamento de Ventas</p>
                  </div>
                  <div className="ml-auto font-medium">Hace 1 hora</div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Resumen del Sistema</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p className="text-sm text-muted-foreground">Cargando resumen...</p>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Estado del Sistema</p>
                  <p className="text-sm text-muted-foreground">Todos los servicios funcionando correctamente</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Última Actualización</p>
                  <p className="text-sm text-muted-foreground">Hace 5 minutos</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Próximo Mantenimiento</p>
                  <p className="text-sm text-muted-foreground">Programado para el 15 de marzo</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

