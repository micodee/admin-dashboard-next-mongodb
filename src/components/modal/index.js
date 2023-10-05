import Button from "../form-control/button";
import Input from "../form-control/input";
import Select from "../form-control/select";

export default function Modal({
  show,
  title,
  formcontrol = [],
  onAdd,
  formData,
  setFormData,
  setShow,
  loading
}) {
  return (
    <>
      {show ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-[3xl]">
              <div className="flex flex-col w-full border-0 rounded-lg shadow-lg relative bg-white outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                </div>
                <div className="relative p-5 flex flex-auto flex-col gap-5">
                  {formcontrol && formcontrol.length
                    ? formcontrol.map((itm) => {
                        return itm.componentType === "input" ? (
                          <Input
                            type={itm.type}
                            placeholder={itm.placeholder}
                            label={itm.label}
                            value={formData && formData[itm.id]}
                            onchange={(e) => setFormData({
                             ...formData, 
                             [itm.id] : itm.type === 'number' ? parseInt(e.target.value) : e.target.value
                            })}
                          />
                        ) : itm.componentType === "select" ? (
                          <Select 
                          label={itm.label} 
                          options={itm.options} 
                          value={formData && formData[itm.id]}
                          onchange={(e) => setFormData({
                           ...formData, 
                           [itm.id] : e.target.value
                          })}/>
                        ) : null;
                      })
                    : null}
                </div>
                <div className="flex items-center justify-end gap-2 p-6 border-t border-solid rounded-b ">
                  <Button text={loading ? "Progress..." : "Add"} onclick={onAdd} disabled={loading} />
                  <Button text={"Close"} onclick={() => setShow(false)} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
}
