"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveContainer } from "recharts"
import { Chart, Bar, Line } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, PlusCircle } from "lucide-react"

const financialOverview = [
  { month: "Ene", ingresos: 50000, gastos: 40000 },
  { month: "Feb", ingresos: 55000, gastos: 42000 },
  { month: "Mar", ingresos: 60000, gastos: 45000 },
  { month: "Abr", ingresos: 58000, gastos: 44000 },
  { month: "May", ingresos: 65000, gastos: 48000 },
  { month: "Jun", ingresos: 70000, gastos: 52000 },
]

const departmentPerformance = [
  { name: "Ventas", rendimiento: 95 },
  { name: "Marketing", rendimiento: 88 },
  { name: "Desarrollo", rendimiento: 92 },
  { name: "Soporte", rendimiento: 85 },
  { name: "Recursos Humanos", rendimiento: 90 },
]

const recentReports = [
  { nombre: "Informe Financiero Q2", fecha: "2023-06-30", tipo: "Finanzas" },
  { nombre: "Análisis de Ventas", fecha: "2023-06-15", tipo: "Ventas" },
  { nombre: "Reporte de Productividad", fecha: "2023-06-01", tipo: "RRHH" },
  { nombre: "Resumen de Proyectos", fecha: "2023-05-31", tipo: "Proyectos" },
  { nombre: "Análisis de Mercado", fecha: "2023-05-15", tipo: "Marketing" },
]

export default function ReportsContent() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Informes</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exportar Datos
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nuevo Informe
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">General</TabsTrigger>
          <TabsTrigger value="financial">Financiero</TabsTrigger>
          <TabsTrigger value="performance">Rendimiento</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Informes</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">128</div>
                <p className="text-xs text-muted-foreground">+14 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Informes Financieros</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">+3 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Informes de Rendimiento</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">36</div>
                <p className="text-xs text-muted-foreground">+5 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Otros Informes</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50</div>
                <p className="text-xs text-muted-foreground">+6 desde el mes pasado</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Informes Recientes</CardTitle>
              <CardDescription>Últimos informes generados en el sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre del Informe</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead className="text-right">Fecha</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentReports.map((report, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{report.nombre}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{report.tipo}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{report.fecha}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resumen Financiero</CardTitle>
              <CardDescription>Ingresos y gastos de los últimos 6 meses</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={350}>
                <Chart>
                  <Line
                    data={financialOverview}
                    dataKey="ingresos"
                    name="Ingresos"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                  />
                  <Line
                    data={financialOverview}
                    dataKey="gastos"
                    name="Gastos"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={2}
                  />
                </Chart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rendimiento por Departamento</CardTitle>
              <CardDescription>Porcentaje de rendimiento de cada departamento</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <Chart>
                  <Bar
                    data={departmentPerformance}
                    dataKey="rendimiento"
                    name="Rendimiento"
                    fill="hsl(var(--chart-1))"
                  />
                </Chart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

