export default function Card({ data, label, icon }) {
  return (
    <div className="rounded-lg border border-stroke bg-white py-6 px-7 shadow">
      <div className="flex items-center justify-center rounded-full h-11 w-11 bg-slate-300">
        {icon}
      </div>
      <div iv className="flex items-center justity-between mt-4">
        <div>
          <h4 className="text-title-md font-bold text-black">{data}</h4>
          <span className="text-sm font-medium">{label}</span>
        </div>
      </div>
    </div>
  );
}
