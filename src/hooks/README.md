## useLocalStorage(clave, valorInicial = '')

Guarda un valor en el localStorage del navegador y lo recupera automáticamente al recargar la página. Útil para formularios, preferencias o cualquier dato que deba sobrevivir a un refresh sin necesidad de un backend.

**Parámetros**

| Nombre | Tipo | Por defecto | Descripción |
|---|---|---|---|
| clave | string | — | Nombre bajo el cual se guarda el valor en localStorage |
| valorInicial | string | '' | Valor que se usa si no hay nada guardado todavía con esa clave |

**Devuelve**

```js
[valor, setValor, limpiar]
// valor: el valor actual (persistido)
// setValor: function — actualiza el valor y lo guarda automáticamente
// limpiar: function — borra el valor de localStorage y vuelve a valorInicial
```

**Ejemplo de uso**

```jsx
import { useLocalStorage } from '../hooks/useLocalStorage'

function NotaPersonal() {
  const [nota, setNota, limpiar] = useLocalStorage('nota-personal', '')

  return (
    <div>
      <textarea value={nota} onChange={(e) => setNota(e.target.value)} />
      <button onClick={limpiar}>Borrar</button>
    </div>
  )
}
```

**Limitaciones**

Solo guarda datos serializables con JSON (no funciona con funciones, Dates sin convertir, o referencias circulares). El valor es por navegador y dispositivo: no se sincroniza entre pestañas en tiempo real ni entre distintos navegadores. Cada clave distinta mantiene su propio valor independiente, aunque se use el mismo hook.