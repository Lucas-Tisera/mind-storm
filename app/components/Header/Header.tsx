import { MountainIcon } from "@/app/svg/MountainIcon";
import Link from "next/link";
import styles from "./Header.module.scss";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
      </Link>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.links}>
          Inicio
        </Link>
        <Link href="/itinerario" className={styles.links}>
          Itinerario
        </Link>
        <Link href="/gastos" className={styles.links}>
          Gastos
        </Link>
        <Link href="/tareas" className={styles.links}>
          Tareas
        </Link>
      </nav>
    </header>
  );
};

export { MainHeader };
