export default function SearchForm({
  buttonName,
  placeholder,
}: {
  buttonName?: string; placeholder?: string;
}) {
  return (
    <form action="">
      <input
        type="text"
        placeholder={ placeholder ? placeholder : "You Search" }
        id="input_search"
      />
      <button
        onClick={(e) => {
            // To prevent default event handle in normal form (submit and clear text search)
          e.preventDefault();
          const search = (
            document.getElementById("input_name") as HTMLInputElement
          ).value;
          alert(`This Result of You Search: "${search}"`);
        }}>
        {buttonName ? buttonName : "Search"}
      </button>
    </form>
  );
}