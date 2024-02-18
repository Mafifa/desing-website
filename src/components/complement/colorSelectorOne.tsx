export function ColorSelectorOne() {
  //To render the color picker
  function renderColorSelector(name: string) {
    return (
      <div>
        <input className="m-2" type="color" id={name} name={name} />
        <label htmlFor={name}>{name}</label>
      </div>
    );
  }
  return (
    <div className="rounded-2xl p-5 bg-slate-700">
      {renderColorSelector("60")}
      {renderColorSelector("60-text")}
      {renderColorSelector("30")}
      {renderColorSelector("30-text")}
      {renderColorSelector("10")}
      {renderColorSelector("10-text")}
    </div>
  );
}
