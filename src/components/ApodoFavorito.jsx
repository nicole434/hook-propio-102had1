import { useLocalStorage } from '../hooks/useLocalStorage'

function ApodoFavorito() {
  const [apodo, setApodo, limpiar] = useLocalStorage('apodo-favorito', '')

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px' }}>
      <h2>Apodo Favorito</h2>
      <input
        type="text"
        value={apodo}
        onChange={(e) => setApodo(e.target.value)}
        style={{ width: '100%' }}
        placeholder="Escribe un apodo..."
      />
      <p>Se guarda automáticamente. Recarga la página y sigue ahí.</p>
      <button onClick={limpiar}>Borrar</button>
    </div>
  )
}

export default ApodoFavorito