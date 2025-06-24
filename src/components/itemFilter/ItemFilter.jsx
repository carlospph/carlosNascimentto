import "../../pages/Filter.css";

export function ItemFilter() {
  return (
    <div className="dflex">
      <input type="checkbox" name="marca" id="nome" />
      <label htmlFor="nome">Nome</label>
    </div>
  );
}
