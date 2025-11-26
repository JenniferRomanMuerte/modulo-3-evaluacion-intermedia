const Filters = ({UpdateSearchText}) => {
  const handleName = (ev)=>{
    UpdateSearchText(ev.target.value);
  }
  return (
    <form className="form">
      <input
        type="text"
        name= "name"
        id= "name"
        onInput={handleName}
      />
    </form>
  );
};

export default Filters;