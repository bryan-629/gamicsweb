
import Heading from "../components/Heading";
import styles from "../styles/Search.module.css";
import Search from "./search";
export default function Home() {
  return (
    <div className={`background ${styles.container}`}>
      <Heading page="Search"/>
      <Search></Search>
    </div>
  );
}
