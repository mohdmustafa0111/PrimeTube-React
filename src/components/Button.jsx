const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 mx-3 my-4 bg-gray-200 rounded-lg">
        {name}
      </button>
    </div>
  );
};
export default Button;
