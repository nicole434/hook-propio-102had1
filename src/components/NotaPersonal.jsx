import { useLocalStorage } from '../hooks/useLocalStorage'

function NotaPersonal() {
  const [nota, setNota, limpiar] = useLocalStorage('nota-personal', '')

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px' }}>
      <h2>Nota Personal</h2>
      <textarea
        value={nota}
        onChange={(e) => setNota(e.target.value)}
        rows={4}
        style={{ width: '100%' }}
        placeholder="Escribe algo..."
      />
      <p>Se guarda automáticamente. Recarga la página y sigue ahí.</p>
      <button onClick={limpiar}>Borrar</button>
    </div>
  )
}

export default NotaPersonal