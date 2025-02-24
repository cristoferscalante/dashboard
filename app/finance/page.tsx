import Layout from "@/components/v1tr0/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, DollarSign, TrendingUp, TrendingDown } from "lucide-react"

export default function FinancePage() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Resumen Financiero</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$524,565.89</div>
              <p className="text-xs text-muted-foreground">Año hasta la fecha</p>
              <div className="mt-4 flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-xs font-medium text-green-500">+8.2%</span>
                <span className="text-xs text-muted-foreground">desde el año pasado</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gastos Totales</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$318,242.50</div>
              <p className="text-xs text-muted-foreground">Año hasta la fecha</p>
              <div className="mt-4 flex items-center space-x-2">
                <TrendingDown className="h-4 w-4 text-red-500" />
                <span className="text-xs font-medium text-red-500">+3.1%</span>
                <span className="text-xs text-muted-foreground">desde el año pasado</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Beneficio Neto</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$206,323.39</div>
              <p className="text-xs text-muted-foreground">Año hasta la fecha</p>
              <div className="mt-4 flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-xs font-medium text-green-500">+12.5%</span>
                <span className="text-xs text-muted-foreground">desde el año pasado</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Aquí podrías agregar más componentes como gráficos, tablas de transacciones, etc. */}
      </div>
    </Layout>
  )
}

