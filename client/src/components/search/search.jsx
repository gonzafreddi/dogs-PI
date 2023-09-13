import Card from "../card/card";
import { useSelector } from "react-redux";
import styles from "../Cards/cards.module.css";

export default function Search() {
  const searchDog = useSelector((state) => state.searchDog);
  console.log(searchDog);

  let contentToRender;

  if (typeof searchDog === 'object' && searchDog !== null && !Array.isArray(searchDog)) {
    contentToRender = (
      <Card
        key={searchDog.id}
        name={searchDog.name}
        image={searchDog.image}
        weight={searchDog.weight}
        temperament={searchDog.temperament}
      />
    );
  } else {
    contentToRender = searchDog?.map((d) => (
      <Card
        key={d.id}
        name={d.name}
        image={d.image}
        weight={d.weight}
        temperament={d.temperament}
      />
    ));
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.divConteiner}>
        {contentToRender}
      </div>
    </div>
  );
}
