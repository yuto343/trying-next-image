import styles from "../styles.module.css";
import Image from "next/image";
import Link from "next/link";
import ViewSource from "../components/view-source";
import Intrinsic from "./layout-intrinsic";

const Code = (p) => <code className={styles.inlineCode} {...p} />;

const Index = () => (
  <div>
    <p>layout="responsive"</p>
    <Image
      alt='newyork'
      src='/newyork.jpg'
      width={5304}
      height={7952}
      layout='responsive'
    />
    <Image
      alt='timez square'
      src='/timez-square.jpg'
      width={3888}
      height={2592}
      layout='responsive'
    />
    <p>同じ画像でlayout="Intrinsic"</p>
    <Image
      alt='newyork'
      src='/newyork.jpg'
      width={1060}
      height={1600}
      layout='intrinsic'
    />
    <p>外部イメージ</p>
    <Image
      alt='Next.js logo'
      src='https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png'
      width={1200}
      height={400}
    />
    <Image
      alt='empire state building'
      src='https://images.pexels.com/photos/472037/pexels-photo-472037.jpeg'
      width={1000}
      height={1200}
      layout='responsive'
    />
  </div>
);

export default Index;
