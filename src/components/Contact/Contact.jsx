import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <p>
          {contact.name}
        </p>
        <p>
          {contact.number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}