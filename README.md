# Hook Propio — useLocalStorage

Proyecto de la tarea "Bibliotecas propias: un Custom Hook Documentado" (102HAD1).

## Qué hace

Implementa un custom hook `useLocalStorage` que guarda un valor en el localStorage del navegador y lo recupera automáticamente al recargar la página. Se usa en dos componentes distintos (`NotaPersonal` y `ApodoFavorito`) que se muestran simultáneamente en `App.jsx`, demostrando que cada instancia (con su propia clave) mantiene su propio estado de forma independiente.

Documentación completa del hook en [`src/hooks/README.md`](./src/hooks/README.md).

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Análisis

**1. ¿Qué lógica encapsula el hook y por qué corresponde a un hook y no a una función utilitaria?**

El hook encapsula el manejo de un valor persistido en localStorage: lo lee al iniciar, lo sincroniza cada vez que cambia, y expone una función para limpiarlo. Esto requiere mantener estado que persiste entre renders y que, al cambiar, provoca que el componente se vuelva a dibujar; eso solo lo puede hacer un hook (usando useState y useEffect), no una función utilitaria pura, que solo transforma datos de entrada a salida sin memoria ni efectos.

**2. ¿Por qué los dos componentes no comparten el estado aunque usen el mismo hook?**

Aunque ambos componentes llaman a useLocalStorage, cada uno lo hace con una clave distinta ('nota-personal' y 'apodo-favorito'), así que cada llamada crea su propia instancia de estado y guarda en una entrada separada de localStorage. En las capturas se ve claramente: escribir en el campo "Nota Personal" no afecta en nada el contenido de "Apodo Favorito", y ambos conservan su valor por separado incluso después de recargar la página.

**3. Si el hook se publicara como paquete npm en la versión 1.0.0, ¿qué cambio exigiría 2.0.0 y cuál solo 1.1.0?**

Un cambio que rompa la interfaz actual (por ejemplo, quitar la función limpiar, cambiar el orden del arreglo devuelto, o cambiar cómo se interpreta el parámetro clave) exigiría la versión 2.0.0, porque el código de quienes ya usan el hook dejaría de funcionar. En cambio, agregar una funcionalidad nueva sin tocar lo existente (como un cuarto valor opcional en el arreglo devuelto, o un parámetro adicional con valor por defecto) solo requeriría 1.1.0, al ser compatible hacia atrás.