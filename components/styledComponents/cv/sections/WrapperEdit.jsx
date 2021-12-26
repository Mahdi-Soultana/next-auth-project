import React, { useContext, useState, useMemo, use } from "react";
import { useUserContext } from "../../../../hooks/userProvider";
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
////////////Main Component
function WrapperEdit({ userId, children, label = "description" }) {
  const [value, setValue] = React.useState("");
  const {
    user: { id },
  } = useUserContext();

  let StateEdit = useState(false);

  const [edit, setEdit] = useMemo(() => StateEdit, [StateEdit]);
  const isMe = userId === id;
  return (
    <EditContext.Provider value={{ edit, value, setValue }}>
      <div className={"wrapperInfo"}>
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
        {isMe && (
          <>
            {edit ? (
              <div
                title="Preview"
                className="edit"
                onClick={() => setEdit(false)}
              >
                <MdPreview size="2rem" color="purple" />
              </div>
            ) : (
              <div title="Edit" className="edit" onClick={() => setEdit(true)}>
                <FaPencilAlt size="2rem" color="green" />
              </div>
            )}
          </>
        )}
      </div>
    </EditContext.Provider>
  );
}

export default WrapperEdit;
