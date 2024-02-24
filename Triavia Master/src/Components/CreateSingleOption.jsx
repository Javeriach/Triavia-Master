function CreateSingleOption({
  option,
  optionSelectedHandler,
  selectedOption,
  character,
  id,
  selectedTrue,
  selectedfalse,
}) {
  return (
    <div>
      <div
        className={`singleOptionsDiv ${
          selectedOption.answer === option ? 'selectedOptionBG' : ''
        }`}
      >
        <p
          value={option}
          className={` option p-0 m-0 `}
          onClick={() => optionSelectedHandler(option, id)}
          id={id}
        >
          {`(${character})`} {option}
        </p>
      </div>
    </div>
  );
}

export default CreateSingleOption;
