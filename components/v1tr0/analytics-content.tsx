"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveContainer } from "recharts"
import { Chart, Line, Bar, Area, Pie } from "@/components/ui/chart"

// Datos de ingresos y gastos
const revenueData = [
  { month: "Ene", ingresos: 12000, gastos: 8000, beneficio: 4000 },
  { month: "Feb", ingresos: 15000, gastos: 9000, beneficio: 6000 },
  { month: "Mar", ingresos: 18000, gastos: 10000, beneficio: 8000 },
  { month: "Abr", ingresos: 20000, gastos: 12000, beneficio: 8000 },
  { month: "May", ingresos: 22000, gastos: 13000, beneficio: 9000 },
  { month: "Jun", ingresos: 25000, gastos: 14000, beneficio: 11000 },
]

// Datos de ventas por producto
const salesData = [
  { name: "Producto A", ventas: 400 },
  { name: "Producto B", ventas: 300 },
  { name: "Producto C", ventas: 200 },
  { name: "Producto D", ventas: 150 },
  { name: "Producto E", ventas: 100 },
]

// Datos detallados de ventas
const detailedSalesData = [
  {
    month: "Ene",
    ventasDirectas: 15000,
    ventasOnline: 8000,
    ventasMayoristas: 12000,
  },
  {
    month: "Feb",
    ventasDirectas: 18000,
    ventasOnline: 9500,
    ventasMayoristas: 13000,
  },
  {
    month: "Mar",
    ventasDirectas: 20000,
    ventasOnline: 11000,
    ventasMayoristas: 15000,
  },
  {
    month: "Abr",
    ventasDirectas: 22000,
    ventasOnline: 12500,
    ventasMayoristas: 16000,
  },
  {
    month: "May",
    ventasDirectas: 25000,
    ventasOnline: 14000,
    ventasMayoristas: 18000,
  },
  {
    month: "Jun",
    ventasDirectas: 28000,
    ventasOnline: 15500,
    ventasMayoristas: 20000,
  },
]

// Datos de distribución de ventas por región
const salesByRegion = [
  { name: "Norte", value: 35 },
  { name: "Sur", value: 25 },
  { name: "Este", value: 20 },
  { name: "Oeste", value: 15 },
  { name: "Centro", value: 5 },
]

// Datos de empleados
const employeeData = [
  {
    month: "Ene",
    activos: 100,
    nuevos: 10,
    bajas: 5,
  },
  {
    month: "Feb",
    activos: 105,
    nuevos: 8,
    bajas: 3,
  },
  {
    month: "Mar",
    activos: 110,
    nuevos: 12,
    bajas: 7,
  },
  {
    month: "Abr",
    activos: 115,
    nuevos: 9,
    bajas: 4,
  },
  {
    month: "May",
    activos: 120,
    nuevos: 11,
    bajas: 6,
  },
  {
    month: "Jun",
    activos: 125,
    nuevos: 10,
    bajas: 5,
  },
]

// Datos de distribución de empleados por departamento
const employeesByDepartment = [
  { name: "Ventas", value: 30 },
  { name: "Producción", value: 25 },
  { name: "Administración", value: 15 },
  { name: "IT", value: 12 },
  { name: "RRHH", value: 10 },
  { name: "Marketing", value: 8 },
]

// Datos de productividad por departamento
const productivityData = [
  {
    department: "Ventas",
    actual: 95,
    objetivo: 90,
  },
  {
    department: "Producción",
    actual: 88,
    objetivo: 85,
  },
  {
    department: "Administración",
    actual: 92,
    objetivo: 88,
  },
  {
    department: "IT",
    actual: 96,
    objetivo: 92,
  },
  {
    department: "RRHH",
    actual: 90,
    objetivo: 85,
  },
  {
    department: "Marketing",
    actual: 93,
    objetivo: 87,
  },
]

export default function AnalyticsContent() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Análisis</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">General</TabsTrigger>
          <TabsTrigger value="sales">Ventas</TabsTrigger>
          <TabsTrigger value="employees">Empleados</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Resumen Financiero</CardTitle>
                <CardDescription>Ingresos, gastos y beneficios mensuales</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={400}>
                  <Chart>
                    <Line
                      data={revenueData}
                      dataKey="ingresos"
                      name="Ingresos"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                    />
                    <Line
                      data={revenueData}
                      dataKey="gastos"
                      name="Gastos"
                      stroke="hsl(var(--chart-2))"
                      strokeWidth={2}
                    />
                    <Line
                      data={revenueData}
                      dataKey="beneficio"
                      name="Beneficio"
                      stroke="hsl(var(--chart-3))"
                      strokeWidth={2}
                    />
                  </Chart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Ventas por Producto</CardTitle>
                <CardDescription>Top 5 productos más vendidos</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <Chart>
                    <Bar data={salesData} dataKey="ventas" name="Ventas" fill="hsl(var(--chart-1))" />
                  </Chart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="sales" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Ventas por Canal</CardTitle>
                <CardDescription>Comparativa de ventas por canal de distribución</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={400}>
                  <Chart>
                    <Area
                      data={detailedSalesData}
                      dataKey="ventasDirectas"
                      name="Ventas Directas"
                      fill="hsl(var(--chart-1))"
                      fillOpacity={0.2}
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                    />
                    <Area
                      data={detailedSalesData}
                      dataKey="ventasOnline"
                      name="Ventas Online"
                      fill="hsl(var(--chart-2))"
                      fillOpacity={0.2}
                      stroke="hsl(var(--chart-2))"
                      strokeWidth={2}
                    />
                    <Area
                      data={detailedSalesData}
                      dataKey="ventasMayoristas"
                      name="Ventas Mayoristas"
                      fill="hsl(var(--chart-3))"
                      fillOpacity={0.2}
                      stroke="hsl(var(--chart-3))"
                      strokeWidth={2}
                    />
                  </Chart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Distribución Regional</CardTitle>
                <CardDescription>Porcentaje de ventas por región</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <Chart>
                    <Pie
                      data={salesByRegion}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="hsl(var(--chart-1))"
                      label
                    />
                  </Chart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="employees" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Movimiento de Personal</CardTitle>
                <CardDescription>Empleados activos, nuevas contrataciones y bajas</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={400}>
                  <Chart>
                    <Bar
                      data={employeeData}
                      dataKey="activos"
                      name="Empleados Activos"
                      fill="hsl(var(--chart-1))"
                      stackId="employees"
                    />
                    <Bar
                      data={employeeData}
                      dataKey="nuevos"
                      name="Nuevas Contrataciones"
                      fill="hsl(var(--chart-2))"
                      stackId="changes"
                    />
                    <Bar
                      data={employeeData}
                      dataKey="bajas"
                      name="Bajas"
                      fill="hsl(var(--chart-3))"
                      stackId="changes"
                    />
                  </Chart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Distribución por Departamento</CardTitle>
                <CardDescription>Porcentaje de empleados por área</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <Chart>
                    <Pie
                      data={employeesByDepartment}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="hsl(var(--chart-1))"
                      label
                    />
                  </Chart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-7">
              <CardHeader>
                <CardTitle>Productividad por Departamento</CardTitle>
                <CardDescription>Comparación entre productividad actual y objetivo</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <Chart>
                    <Bar
                      data={productivityData}
                      dataKey="actual"
                      name="Productividad Actual"
                      fill="hsl(var(--chart-1))"
                    />
                    <Bar data={productivityData} dataKey="objetivo" name="Objetivo" fill="hsl(var(--chart-2))" />
                  </Chart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

