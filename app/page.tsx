import PasswordForm from "../components/PasswordForm";
import { FaSearch } from "react-icons/fa";
import Search from "../components/SearchBar";
import { MdLock } from "react-icons/md";
import PasswordList, { fetchData } from "../components/PasswordList";
import { fetchDataAndUpdate } from "../components/PasswordList";
const HomePage = () => {
  return (
    <div className="py-8">
      <h1 className="heading whitespace-pre">
        <MdLock className="hidden md:inline-block" />
        Save Password
      </h1>
      <PasswordForm />
      <h1 className="heading whitespace-pre">
        <FaSearch className="hidden md:inline-block" /> Search for passwords
      </h1>
      <Search />
      <PasswordList/>
    </div>
  );
};

export default HomePage;
