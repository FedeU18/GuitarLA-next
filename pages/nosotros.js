import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";
const Nosotros = () => {
  return (
    <Layout
      title="Nosotros"
      description="Sobre nosotros, GuitarLA, tienda de música"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
            width={1000}
            height={800}
          ></Image>
          <div>
            <p>
              Proin euismod velit eros. Fusce facilisis erat magna, et sagittis
              augue venenatis eget. Duis fringilla, lacus eu molestie vulputate,
              leo lacus elementum libero, vel tincidunt metus nulla vitae nibh.
              Maecenas sem nibh, ultrices in lacinia blandit, elementum a urna.
              Mauris congue libero sed odio dictum, vitae sodales quam aliquam.
              Etiam viverra mi a mollis tempor.
            </p>
            <p>
              Pellentesque egestas dui quam, eget hendrerit ipsum condimentum
              at. Maecenas lorem enim, mollis ac arcu tempus, posuere placerat
              neque. Nulla et mauris consequat, hendrerit eros sit amet,
              ultricies eros. Ut ullamcorper leo ut ex convallis, ac feugiat
              enim lobortis. Sed efficitur at dolor vel aliquam. Aliquam erat
              volutpat. Praesent faucibus, leo non egestas varius, turpis lorem
              posuere risus, quis iaculis est tortor suscipit risus. Nulla
              elementum lorem vitae nisi ullamcorper condimentum.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
