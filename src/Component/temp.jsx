<input
  type="text"
  className={`font-bold peer h-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ${
    element.note.includes('<>') ? 'blue-brackets' : ''
  }`}
  value={element.note}
  onChange={() => {
    onchangeInput(index);
  }}
/>
