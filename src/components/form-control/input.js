export default function Input({label, placeholder, onchange, value, type}) {
  return (
    <div className="relative">
     <p className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">{label}</p>
     <input 
      placeholder={placeholder}
      type={type || "text"}
      onChange={onchange}
      value={value}
      className="border placeholder-gray-400 focus:outlined-none w-full p-4 m-0 text-base block bg-white rounded-md"
     />
    </div>
  )
}