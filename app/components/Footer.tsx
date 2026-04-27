export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-foot">
      <div className="foot-inner">
        <div>© {year} Kevin Ren B. Pallado</div>
        <div>Handcrafted · Cagayan de Oro, PH</div>
      </div>
    </footer>
  );
}
