export default function PageTransition({ children }) {
  return (
    <div className="site-route" style={{ position: 'relative' }}>
      <div className="site-route-content">{children}</div>
    </div>
  );
}
