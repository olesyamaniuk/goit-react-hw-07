import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import ContactForm from "../ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h2>PhoneBook</h2>
      <ContactForm />
      <h2>My Contacts</h2>
      <SearchBox />
      {isLoading && <Loading />}
      {isError && <Error />}
      <ContactList />
    </div>
  );
}