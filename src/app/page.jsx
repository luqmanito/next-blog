import Link from "next/link";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
          aperiam?
        </h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
        blanditiis unde, nam delectus eos dignissimos, ipsam molestias eveniet
        sint, aliquid sequi earum architecto ut suscipit perferendis maxime
        quisquam odit! Reiciendis? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Dolores blanditiis unde, nam delectus eos dignissimos,
        ipsam molestias eveniet sint, aliquid sequi earum architecto ut suscipit
        perferendis maxime quisquam odit! Reiciendis? Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Dolores blanditiis unde, nam delectus
        eos dignissimos, ipsam molestias eveniet sint, aliquid sequi earum
        architecto ut suscipit perferendis maxime quisquam odit! Reiciendis?
      </Link>
    </div>
  );
}
