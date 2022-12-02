export const SectionTitle = ({ title, children }) => {
  return (
    <section className="section">
      <h2 title={title}>{title}</h2>{children}
    </section>
  );
};
