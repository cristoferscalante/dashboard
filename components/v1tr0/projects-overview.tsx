"use client"

import { Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function ProjectsOverview() {
  const [activeProjects, setActiveProjects] = useState<number | null>(null)
  const [onTrack, setOnTrack] = useState<number | null>(null)
  const [atRisk, setAtRisk] = useState<number | null>(null)
  const [delayed, setDelayed] = useState<number | null>(null)

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      const total = Math.floor(Math.random() * 30)
      setActiveProjects(total)
      setOnTrack(Math.floor(Math.random() * total))
      setAtRisk(Math.floor(Math.random() * (total - onTrack!)))
      setDelayed(total - onTrack! - atRisk!)
    }, 1000)
  }, [onTrack, atRisk]) // Added dependencies

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Resumen de Proyectos</CardTitle>
        <Briefcase className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {activeProjects !== null ? (
          <>
            <div className="text-2xl font-bold">{activeProjects}</div>
            <p className="text-xs text-muted-foreground">Proyectos Activos</p>
            <div className="mt-4 space-y-2">
              {onTrack !== null && (
                <div className="text-xs">
                  <span className="font-medium">{onTrack}</span> En Curso
                </div>
              )}
              {atRisk !== null && (
                <div className="text-xs">
                  <span className="font-medium">{atRisk}</span> En Riesgo
                </div>
              )}
              {delayed !== null && (
                <div className="text-xs">
                  <span className="font-medium">{delayed}</span> Retrasados
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

