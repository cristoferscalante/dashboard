"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const events = [
  { id: 1, title: "Reunión de Equipo", date: "2023-06-15", time: "10:00", type: "Trabajo" },
  { id: 2, title: "Entrega de Proyecto", date: "2023-06-18", time: "15:00", type: "Proyecto" },
  { id: 3, title: "Revisión de Presupuesto", date: "2023-06-20", time: "11:00", type: "Finanzas" },
  { id: 4, title: "Entrevista de Trabajo", date: "2023-06-22", time: "14:00", type: "RRHH" },
  { id: 5, title: "Lanzamiento de Producto", date: "2023-06-25", time: "09:00", type: "Marketing" },
]

const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export default function CalendarContent() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedView, setSelectedView] = useState("mes")

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month)

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Calendario</h2>
        <div className="flex items-center space-x-2">
          <Select value={selectedView} onValueChange={setSelectedView}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Seleccionar vista" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mes">Vista Mensual</SelectItem>
              <SelectItem value="semana">Vista Semanal</SelectItem>
              <SelectItem value="dia">Vista Diaria</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nuevo Evento
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-md font-medium">
            {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center font-medium text-sm py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={`empty-${index}`} className="text-center py-2"></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, index) => (
              <div key={`day-${index + 1}`} className="text-center py-2 border rounded">
                <div className="font-medium">{index + 1}</div>
                {events
                  .filter(
                    (event) =>
                      new Date(event.date).getDate() === index + 1 &&
                      new Date(event.date).getMonth() === month &&
                      new Date(event.date).getFullYear() === year,
                  )
                  .map((event) => (
                    <Badge key={event.id} variant="outline" className="mt-1">
                      {event.title}
                    </Badge>
                  ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Próximos Eventos</CardTitle>
          <CardDescription>Eventos programados para los próximos días</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.slice(0, 5).map((event) => (
              <div key={event.id} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {event.date} - {event.time}
                  </p>
                </div>
                <Badge>{event.type}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

