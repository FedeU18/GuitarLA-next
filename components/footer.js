import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={"navegacion"}>
          <Link legacyBehavior href={"/"}>
            Inicio
          </Link>
          <Link legacyBehavior href={"/nosotros"}>
            Nosotros
          </Link>
          <Link legacyBehavior href={"/blog"}>
            Blog
          </Link>
          <Link legacyBehavior href={"/guitarras"}>
            Tienda
          </Link>
        </nav>
        <p>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
