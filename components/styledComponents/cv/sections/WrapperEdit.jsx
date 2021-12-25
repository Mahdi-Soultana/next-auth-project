import React, { useContext, useState, useMemo, use } from "react";

const EditContext = React.createContext();
import { FaPencilAlt } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
export function useInitValue(setStateInit, initValue) {
  React.useEffect(() => {
    setStateInit(initValue);
  }, []);
}
export const useEditContext = () => useContext(EditContext);

export function handelChange(e, setState, edit) {
  setState(e.target.value);
}
function WrapperEdit({ user, children, label = "description" }) {
  const [value, setValue] = React.useState("");

  let StateEdit = useState(false);

  const [edit, setEdit] = useMemo(() => StateEdit, [StateEdit]);

  return (
    <EditContext.Provider value={{ edit, value, setValue }}>
      <div className="wrapperInfo">
        <>
          {edit && (
            <textarea
              placeholder={`please enter your ${label}`}
              value={value}
              onChange={(e) => handelChange(e, setValue, value)}
            >
              {value}
            </textarea>
          )}
          {children}
        </>
        {edit ? (
          <a className="edit" onClick={() => setEdit(false)}>
            <FaPencilAlt size="2rem" />
          </a>
        ) : (
          <a className="edit" onClick={() => setEdit(true)}>
            <MdPreview size="2rem" />
          </a>
        )}
      </div>
    </EditContext.Provider>
  );
}

export default WrapperEdit;
