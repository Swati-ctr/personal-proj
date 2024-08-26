import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <section className='button-group'>
      <Button onClick={handleMarkAllAsComplete} buttontype='secondary'>
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttontype='secondary'>
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttontype='secondary'>
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttontype='secondary'>
        Remove all items
      </Button>
    </section>
  );
}
