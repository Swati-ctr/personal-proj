import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <section className='button-group'>
      <Button
        onClick={() => {
          console.log("Mark all as complete clicked");
          handleMarkAllAsComplete();
        }}
        buttonType='secondary'
      >
        Mark all as complete
      </Button>
      <Button
        onClick={() => {
          console.log("Mark all as incomplete clicked");
          handleMarkAllAsIncomplete();
        }}
        buttonType='secondary'
      >
        Mark all as incomplete
      </Button>
      <Button
        onClick={() => {
          console.log("Reset to initial clicked");
          handleResetToInitial();
        }}
        buttonType='secondary'
      >
        Reset to initial
      </Button>
      <Button
        onClick={() => {
          console.log("Remove all projects clicked");
          handleRemoveAllItems();
        }}
        buttonType='secondary'
      >
        Remove all items
      </Button>
    </section>
  );
}
