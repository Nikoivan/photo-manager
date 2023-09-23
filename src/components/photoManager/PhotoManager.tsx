import "./css/photomanager.css";
import { useState, useRef, ChangeEvent } from "react";
import PhotoList from "../photoList/PhotoList";

export default function PhotoManager() {
  const [filesState, setFilesState] = useState<File[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  /* const onClick = (e) => {
    fileRef.DispatchEvent(new MouseEvent("click"));
  };*/

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      setFilesState((prevList) => [...prevList, ...[...files]]);
    }
  };

  const deleteItem = (arg: File) => {
    setFilesState((prevList) => prevList.filter((el) => el !== arg));
  };

  return (
    <div className="manager">
      <form className="manager__form">
        <input
          onChange={changeHandler}
          className="form__input"
          type="file"
          name="file"
          ref={fileRef}
        />
      </form>
      <div className="manager__decorator">
        <span className="decorator__text">Click to Select</span>
      </div>
      <PhotoList
        props={{
          list: filesState.length > 0 ? filesState : undefined,
          callBack: deleteItem,
        }}
      />
    </div>
  );
}
