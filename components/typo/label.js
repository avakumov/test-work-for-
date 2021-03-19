export default ({ children }) => (
  <div className="label">
    {children}
    <style jsx>{`
      .label {
        margin: 3px 0;
        color: var(--color6);
        font-size: 20px;
        text-transform: uppercase;
      }
    `}</style>
  </div>
)
