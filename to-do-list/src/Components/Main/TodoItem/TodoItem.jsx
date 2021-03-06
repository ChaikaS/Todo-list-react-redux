import "./todoItem.scss";
import contentEditIcon from "../../../assets/image/edit-icon.png";
import contentDeleteIcon from "../../../assets/image/delete-icon.png";
import { useDispatch } from "react-redux";
import { postItemToCompletedList, deleteTodoItem, editTodoItem } from "../../../store/actions/actionsTodo.js";

export default function TodoItem({ item, title }) {
  const editIcon = <img src={contentEditIcon} alt="edit icon" />;
  const deleteIcon = <img src={contentDeleteIcon} alt="delete icon" />;
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTodoItem(item.completed, item.id));
  };
  const completedTodoHandler = () => {
    dispatch(postItemToCompletedList(item.completed, item.id, item));
  };
  const editTodoHandler = () => {
    dispatch(editTodoItem(item.title, item.id));
  };

  return (
    <div className="todo__item">
      <input onChange={completedTodoHandler} type="checkbox" checked={item.completed ? "checked" : ""} className="todo__checkbox " />
      <label className={`todo__text ${item.completed ? "completed" : ""}`}>{title}</label>
      <div onClick={editTodoHandler} className={`todo__edit-icon ${item.completed ? "display-none" : ""}`}>
        {editIcon}
      </div>
      <div onClick={deleteHandler} className="todo__delete-icon">
        {deleteIcon}
      </div>
    </div>
  );
}
