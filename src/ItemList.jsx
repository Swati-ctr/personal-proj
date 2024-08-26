import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";

const sortingOption = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(() => {
    console.log("Sorting by:", sortBy); // Debugging log
    const sorted = [...items].sort((a, b) => {
      if (sortBy === "packed") {
        return b.packed - a.packed;
      }
      if (sortBy === "unpacked") {
        return a.packed - b.packed;
      }
      return 0; // Return 0 for default sorting (no change)
    });
    console.log("Sorted items:", sorted); // Debugging log
    return sorted;
  }, [items, sortBy]);

  return (
    <ul className='item-list'>
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className='sorting'>
          <Select
            onChange={(option) => {
              console.log("Selected option:", option); // Debugging log
              setSortBy(option.value);
            }}
            defaultValue={sortingOption[0]}
            options={sortingOption}
          />
        </section>
      )}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className='item'>
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
          type='checkbox'
        />{" "}
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
