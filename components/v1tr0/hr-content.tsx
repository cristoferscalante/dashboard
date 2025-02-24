"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveContainer } from "recharts"
import { Chart, Bar, Pie } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon, PlusCircle } from "lucide-react"
import LogoVitroSvg from "@/public/svg/logo-vitro.svg"

const employeeData = [
  { month: "Ene", activos: 100, nuevos: 10, bajas: 5 },
  { month: "Feb", activos: 105, nuevos: 8, bajas: 3 },
  { month: "Mar", activos: 110, nuevos: 12, bajas: 7 },
  { month: "Abr", activos: 115, nuevos: 9, bajas: 4 },
  { month: "May", activos: 120, nuevos: 11, bajas: 6 },
  { month: "Jun", activos: 125, nuevos: 10, bajas: 5 },
]

const employeesByDepartment = [
  { name: "Ventas", value: 30 },
  { name: "Producción", value: 25 },
  { name: "Administración", value: 15 },
  { name: "IT", value: 12 },
  { name: "RRHH", value: 10 },
  { name: "Marketing", value: 8 },
]

const salaryData = [
  { department: "Ventas", promedio: 45000 },
  { department: "Producción", promedio: 40000 },
  { department: "Administración", promedio: 50000 },
  { department: "IT", promedio: 60000 },
  { department: "RRHH", promedio: 48000 },
  { department: "Marketing", promedio: 52000 },
]

const recentEmployees = [
  { name: "Ana García", department: "Ventas", startDate: "01/06/2023" },
  { name: "Carlos Rodríguez", department: "IT", startDate: "15/05/2023" },
  { name: "María López", department: "RRHH", startDate: "01/05/2023" },
]

export default function HRContent() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Recursos Humanos</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <CalendarIcon className="mr-2 h-4 w-4" />
            Calendario
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nuevo Empleado
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">General</TabsTrigger>
          <TabsTrigger value="employees">Empleados</TabsTrigger>
          <TabsTrigger value="salaries">Salarios</TabsTrigger>
        </TabsList>

        {/* OVERVIEW */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Empleados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">125</div>
                <p className="text-xs text-muted-foreground">+5 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Nuevas Contrataciones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">10</div>
                <p className="text-xs text-muted-foreground">Este mes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb=2">
                <CardTitle className="text-sm font-medium">Tasa de Rotación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4%</div>
                <p className="text-xs text-muted-foreground">-1% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Satisfacción Laboral</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">+2% desde la última encuesta</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Movimiento de Personal */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Movimiento de Personal</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  {/* Pasa la data al contenedor <Chart> en lugar de cada <Bar> */}
                  <Chart data={employeeData}>
                    <Bar
                      dataKey="activos"
                      name="Empleados Activos"
                      fill="hsl(var(--chart-1))"
                      stackId="employees"
                    />
                    <Bar
                      dataKey="nuevos"
                      name="Nuevas Contrataciones"
                      fill="hsl(var(--chart-2))"
                      stackId="changes"
                    />
                    <Bar
                      dataKey="bajas"
                      name="Bajas"
                      fill="hsl(var(--chart-3))"
                      stackId="changes"
                    />
                  </Chart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Distribución por Departamento */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Distribución por Departamento</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  {/* Igual, pasa la data al contenedor <Chart> */}
                  <Chart data={employeesByDepartment}>
                    <Pie
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="hsl(var(--chart-1))"
                      label
                    />
                  </Chart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* EMPLOYEES */}
        <TabsContent value="employees" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Empleados Recientes</CardTitle>
              <CardDescription>Últimas incorporaciones a la empresa</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {recentEmployees.map((employee, index) => (
                  <div key={index} className="flex items-center">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={LogoVitroSvg} alt={employee.name} />
                      <AvatarFallback>
                        {employee.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{employee.name}</p>
                      <p className="text-sm text-muted-foreground">{employee.department}</p>
                    </div>
                    <div className="ml-auto font-medium">{employee.startDate}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SALARIES */}
        <TabsContent value="salaries" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Salarios Promedio por Departamento</CardTitle>
              <CardDescription>Comparativa de salarios entre departamentos</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                {/* También aquí pasamos la data al <Chart> */}
                <Chart data={salaryData}>
                  <Bar
                    dataKey="promedio"
                    name="Salario Promedio"
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
