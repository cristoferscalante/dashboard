"use client"

import { cn } from "@/lib/utils"
import { ArrowUpRight, ArrowDownLeft, Wallet, SendHorizontal, QrCode, Plus, ArrowRight, CreditCard } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface AccountItem {
  id: string
  title: string
  description?: string
  balance: string
  type: "savings" | "checking" | "investment" | "debt"
}

interface List01Props {
  totalBalance?: string
  accounts?: AccountItem[]
  className?: string
}

const ACCOUNTS: AccountItem[] = [
  {
    id: "1",
    title: "Ahorros Principales",
    description: "Ahorros personales",
    balance: "$8,459.45",
    type: "savings",
  },
  {
    id: "2",
    title: "Cuenta Corriente",
    description: "Gastos diarios",
    balance: "$2,850.00",
    type: "checking",
  },
  {
    id: "3",
    title: "Portafolio de Inversión",
    description: "Acciones y ETFs",
    balance: "$15,230.80",
    type: "investment",
  },
  {
    id: "4",
    title: "Tarjeta de Crédito",
    description: "Cargos pendientes",
    balance: "$1,200.00",
    type: "debt",
  },
]

export default function List01({ totalBalance = "$26,540.25", accounts = ACCOUNTS, className }: List01Props) {
  const [message, setMessage] = useState("")

  const showMessage = (action: string) => {
    setMessage(`Acción: ${action}. Esta función aún no está implementada.`)
    setTimeout(() => setMessage(""), 3000)
  }

  return (
    <Card className={cn("w-full max-w-xl mx-auto", className)}>
      <CardHeader className="border-b">
        <CardTitle>Balance Total</CardTitle>
        <p className="text-2xl font-semibold">{totalBalance}</p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {accounts.length > 0 ? (
            accounts.map((account) => (
              <div key={account.id} className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={cn("p-2 rounded-full", {
                      "bg-green-100": account.type === "savings",
                      "bg-blue-100": account.type === "checking",
                      "bg-purple-100": account.type === "investment",
                      "bg-red-100": account.type === "debt",
                    })}
                  >
                    {account.type === "savings" && <Wallet className="w-4 h-4 text-green-600" />}
                    {account.type === "checking" && <QrCode className="w-4 h-4 text-blue-600" />}
                    {account.type === "investment" && <ArrowUpRight className="w-4 h-4 text-purple-600" />}
                    {account.type === "debt" && <CreditCard className="w-4 h-4 text-red-600" />}
                  </div>
                  <div>
                    <p className="font-medium">{account.title}</p>
                    <p className="text-sm text-gray-500">{account.description}</p>
                  </div>
                </div>
                <p className="font-medium">{account.balance}</p>
              </div>
            ))
          ) : (
            <p className="p-4 text-center text-gray-500">No hay cuentas disponibles</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-2">
        <Button onClick={() => showMessage("Agregar")} className="flex-1 mr-1">
          <Plus className="w-4 h-4 mr-2" /> Agregar
        </Button>
        <Button onClick={() => showMessage("Enviar")} className="flex-1 mx-1">
          <SendHorizontal className="w-4 h-4 mr-2" /> Enviar
        </Button>
        <Button onClick={() => showMessage("Recargar")} className="flex-1 mx-1">
          <ArrowDownLeft className="w-4 h-4 mr-2" /> Recargar
        </Button>
        <Button onClick={() => showMessage("Más")} className="flex-1 ml-1">
          <ArrowRight className="w-4 h-4 mr-2" /> Más
        </Button>
      </CardFooter>
      {message && <div className="p-2 text-center text-sm bg-blue-100 text-blue-800">{message}</div>}
    </Card>
  )
}

