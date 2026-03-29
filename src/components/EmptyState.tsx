// EmptyState.tsx
export const EmptyState = () => (
  <div className="empty-state">
    <p>❌ No se encontraron platillos que coincidan con tu búsqueda.</p>
    <button onClick={() => window.location.reload()}>Ver todo el menú</button>
  </div>
);

