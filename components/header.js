import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link legacyBehavior href={"/"}>
          <a>
            <Image
              src={"/img/logo.svg"}
              width={300}
              height={40}
              alt="imagen logotipo"
            />
          </a>
        </Link>
        <nav className={"navegacion"}>
          <Link legacyBehavior href={"/"}>
            <a className={router.route === "/" ? styles.active : ""}>Inicio</a>
          </Link>
          <Link legacyBehavior href={"/nosotros"}>
            <a className={router.route === "/nosotros" ? styles.active : ""}>
              Nosotros
            </a>
          </Link>
          <Link legacyBehavior href={"/blog"}>
            <a className={router.route === "/blog" ? styles.active : ""}>
              Blog
            </a>
          </Link>
          <Link legacyBehavior href={"/guitarras"}>
            <a className={router.route === "/guitarras" ? styles.active : ""}>
              Tienda
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
