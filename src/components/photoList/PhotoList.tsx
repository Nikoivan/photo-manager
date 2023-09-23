import "./css/photolist.css";

export default function PhotoList({
  props,
}: {
  props: { list: File[] | undefined; callBack: (arg: File) => void };
}) {
  return (
    <ul className="manager__list">
      {props.list?.map((el, id) => (
        <li className="item-image" key={id}>
          <span className="close-btn" onClick={() => props.callBack(el)}>
            &#10006;
          </span>
          <h4 className="image-title">{el.name}</h4>
          <img
            src={URL.createObjectURL(el)}
            alt="file.name"
            className="image"
          />
        </li>
      ))}
    </ul>
  );
}
