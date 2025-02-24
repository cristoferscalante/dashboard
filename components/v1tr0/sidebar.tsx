"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart2,
  Briefcase,
  Calendar,
  FileText,
  HelpCircle,
  Home,
  Menu,
  Package,
  Settings,
  ShoppingCart,
  Truck,
  Users,
  Wallet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import LogoVitroSvg from "@/public/svg/logo-vitro.svg"

const menuItems = [
  {
    title: "General",
    items: [
      {
        label: "Panel de Control",
        icon: Home,
        href: "/dashboard",
      },
      {
        label: "Análisis",
        icon: BarChart2,
        href: "/analytics",
      },
    ],
  },
  {
    title: "Módulos",
    items: [
      {
        label: "Finanzas",
        icon: Wallet,
        href: "/finance",
      },
      {
        label: "Recursos Humanos",
        icon: Users,
        href: "/hr",
      },
      {
        label: "Inventario",
        icon: Package,
        href: "/inventory",
      },
      {
        label: "Ventas",
        icon: ShoppingCart,
        href: "/sales",
      },
      {
        label: "Compras",
        icon: Truck,
        href: "/procurement",
      },
      {
        label: "Proyectos",
        icon: Briefcase,
        href: "/projects",
      },
    ],
  },
  {
    title: "Gestión",
    items: [
      {
        label: "Informes",
        icon: FileText,
        href: "/reports",
      },
      {
        label: "Calendario",
        icon: Calendar,
        href: "/calendar",
      },
    ],
  },
]

const footerItems = [
  {
    label: "Configuración",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "Ayuda",
    icon: HelpCircle,
    href: "/help",
  },
]

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Abrir menú</span>
      </Button>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center gap-2 px-6 border-b">
            <Image
              src={LogoVitroSvg}
              alt="V1TR0"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="font-semibold text-lg pt-1">V1TR0</span>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-8">
              {menuItems.map((group) => (
                <div key={group.title}>
                  <div className="mb-2 px-3">
                    <h2 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      {group.title}
                    </h2>
                  </div>

                  <div className="space-y-1">
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                        <span
                          className={cn(
                            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                            pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                          )}
                        >
                          <item.icon className="mr-3 h-4 w-4" />
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>

          <div className="border-t p-4">
            <div className="space-y-1">
              {footerItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <span
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                    )}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/80 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  )
}

