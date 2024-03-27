import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Culturin Analytics</h1>
      <p>
        This is where we will showcase analytics collected from Google, Vercel,
        Quantcast and more
      </p>
    </main>
  );
}
