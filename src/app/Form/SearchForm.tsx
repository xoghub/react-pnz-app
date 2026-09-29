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
      />
      <button
        onClick={(e) => {
            // To prevent default event handle in normal form (submit and clear text search)
          e.preventDefault();
          alert("You Search");
        }}>
        {buttonName ? buttonName : "Search"}
      </button>
    </form>
  );
}