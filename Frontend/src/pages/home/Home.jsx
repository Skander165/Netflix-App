import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';

export default function Home({type}) {
  return (
    <div className="home">
      <Navbar />
      <Featured type={type}/>
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
