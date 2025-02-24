"use client"

import type React from "react"

import {
  LineChart,
  Line as RechartsLine,
  Bar as RechartsBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area as RechartsArea,
  Pie as RechartsPie,
} from "recharts"

export function Chart({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer>
        <LineChart
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} tickMargin={10} />
          <YAxis tickLine={false} axisLine={false} fontSize={12} tickMargin={10} />
          <Tooltip />
          <Legend />
          {children}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export const Line = RechartsLine
export const Bar = RechartsBar
export const Area = RechartsArea
export const Pie = RechartsPie

