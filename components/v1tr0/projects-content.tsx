"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveContainer } from "recharts"
import { Chart, Line, Pie } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Briefcase, PlusCircle, FileText } from "lucide-react"

const projectOverview = [
  { month: "Ene", proyectos: 10 },
  { month: "Feb", proyectos: 12 },
  { month: "Mar", proyectos: 15 },
  { month: "Abr", proyectos: 13 },
  { month: "May", proyectos: 18 },
  { month: "Jun", proyectos: 20 },
]

const projectStatusDistribution = [
  { name: "En Progreso", value: 45 },
  { name: "Completado", value: 30 },
  { name: "Planificación", value: 15 },
  { name: "En Pausa", value: 10 },
]

const topProjects = [
  { name: "Proyecto A", presupuesto: 150000, progreso: 75 },
  { name: "Proyecto B", presupuesto: 120000, progreso: 60 },
  { name: "Proyecto C", presupuesto: 100000, progreso: 90 },
  { name: "Proyecto D", presupuesto: 80000, progreso: 40 },
  { name: "Proyecto E", presupuesto: 50000, progreso: 25 },
]

const recentActivities = [
  { proyecto: "Proyecto A", actividad: "Reunión de seguimiento", fecha: "2023-06-15" },
  { proyecto: "Proyecto C", actividad: "Entrega de informe", fecha: "2023-06-14" },
  { proyecto: "Proyecto B", actividad: "Actualización de cronograma", fecha: "2023-06-13" },
]

export default function ProjectsContent() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Generar Informe
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nuevo Proyecto
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">General</TabsTrigger>
          <TabsTrigger value="projects">Proyectos</TabsTrigger>
          <TabsTrigger value="activities">Actividades</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Proyectos Activos</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">20</div>
                <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Proyectos Completados</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">+5 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Presupuesto Total</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,500,000</div>
                <p className="text-xs text-muted-foreground">+$200,000 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasa de Éxito</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">+2% desde el mes pasado</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Resumen de Proyectos</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <Chart>
                    <Line
                      data={projectOverview}
                      dataKey="proyectos"
                      name="Proyectos"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                    />
                  </Chart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Estado de Proyectos</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <Chart>
                    <Pie
                      data={projectStatusDistribution}
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
        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Principales Proyectos</CardTitle>
              <CardDescription>Top 5 proyectos por presupuesto y progreso</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead className="text-right">Presupuesto</TableHead>
                    <TableHead className="text-right">Progreso</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProjects.map((project, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell className="text-right">${project.presupuesto.toLocaleString()}</TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant={
                            project.progreso >= 75 ? "default" : project.progreso >= 50 ? "secondary" : "outline"
                          }
                        >
                          {project.progreso}%
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Actividades Recientes</CardTitle>
              <CardDescription>Últimas actividades registradas en los proyectos</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Proyecto</TableHead>
                    <TableHead>Actividad</TableHead>
                    <TableHead className="text-right">Fecha</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActivities.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{activity.proyecto}</TableCell>
                      <TableCell>{activity.actividad}</TableCell>
                      <TableCell className="text-right">{activity.fecha}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

