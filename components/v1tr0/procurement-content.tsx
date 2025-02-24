"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveContainer } from "recharts"
import { Chart, Line, Pie } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, PlusCircle, FileText } from "lucide-react"

const purchaseOverview = [
  { month: "Ene", compras: 40000 },
  { month: "Feb", compras: 45000 },
  { month: "Mar", compras: 50000 },
  { month: "Abr", compras: 48000 },
  { month: "May", compras: 55000 },
  { month: "Jun", compras: 60000 },
]

const supplierDistribution = [
  { name: "Proveedor A", value: 30 },
  { name: "Proveedor B", value: 25 },
  { name: "Proveedor C", value: 20 },
  { name: "Proveedor D", value: 15 },
  { name: "Otros", value: 10 },
]

const topSuppliers = [
  { name: "Proveedor A", compras: 150000, productos: 25 },
  { name: "Proveedor B", compras: 120000, productos: 18 },
  { name: "Proveedor C", compras: 100000, productos: 15 },
  { name: "Proveedor D", compras: 80000, productos: 12 },
  { name: "Proveedor E", compras: 50000, productos: 8 },
]

const recentPurchaseOrders = [
  { id: "PO-001", proveedor: "Proveedor A", total: 15000, estado: "Recibido" },
  { id: "PO-002", proveedor: "Proveedor C", total: 8500, estado: "En tránsito" },
  { id: "PO-003", proveedor: "Proveedor B", total: 12000, estado: "Pendiente" },
]

export default function ProcurementContent() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Compras</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Generar Informe
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nueva Orden de Compra
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">General</TabsTrigger>
          <TabsTrigger value="suppliers">Proveedores</TabsTrigger>
          <TabsTrigger value="orders">Órdenes de Compra</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Compras Totales</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$298,000</div>
                <p className="text-xs text-muted-foreground">+15.2% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Órdenes de Compra</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+8% desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Proveedores Activos</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87</div>
                <p className="text-xs text-muted-foreground">+3 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tiempo Promedio de Entrega</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5.3 días</div>
                <p className="text-xs text-muted-foreground">-0.5 días desde el mes pasado</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Resumen de Compras</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <Chart>
                    <Line
                      data={purchaseOverview}
                      dataKey="compras"
                      name="Compras"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                    />
                  </Chart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Distribución de Proveedores</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <Chart>
                    <Pie
                      data={supplierDistribution}
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
        <TabsContent value="suppliers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Principales Proveedores</CardTitle>
              <CardDescription>Top 5 proveedores por volumen de compras</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead className="text-right">Compras Totales</TableHead>
                    <TableHead className="text-right">Productos Suministrados</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topSuppliers.map((supplier, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{supplier.name}</TableCell>
                      <TableCell className="text-right">${supplier.compras.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{supplier.productos}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Órdenes de Compra Recientes</CardTitle>
              <CardDescription>Últimas órdenes de compra realizadas</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Orden</TableHead>
                    <TableHead>Proveedor</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="text-right">Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentPurchaseOrders.map((order, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.proveedor}</TableCell>
                      <TableCell className="text-right">${order.total.toLocaleString()}</TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant={
                            order.estado === "Recibido"
                              ? "default"
                              : order.estado === "En tránsito"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {order.estado}
                        </Badge>
                      </TableCell>
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

