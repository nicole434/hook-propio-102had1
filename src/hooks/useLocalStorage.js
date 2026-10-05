import { useState, useEffect } from 'react'

export function useLocalStorage(clave, valorInicial = '') {
  const [valor, setValor] = useState(() => {
    const guardado = localStorage.getItem(clave)
    return guardado !== null ? JSON.parse(guardado) : valorInicial
  })

  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor))
  }, [clave, valor])

  const limpiar = () => {
    localStorage.removeItem(clave)
    setValor(valorInicial)
  }

  return [valor, setValor, limpiar]
}