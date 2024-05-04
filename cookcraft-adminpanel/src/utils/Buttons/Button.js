const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
