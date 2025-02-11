import ThingCard from "@/components/ThingCard/ThingCard";
import { getSpeciesEmoji, livingThingsData } from "@/data";
import Link from "next/link";

import styles from './about.module.css';

const baseUrl = "https://cjoshmartin.github.io/react-spa-seo";

type Params = Promise<{ slug: string }>

export async function generateMetadata({
    params,
  }: {
    params: Promise<{
      slug: string;
    }>
  }) {
    const { slug } = await params;
    const data = livingThingsData[Number(slug) - 1];
}

export default async function Page({
    params,
  }: {
    params: Promise<{
      slug: string;
    }>
  })  {
    const { slug } = await params;
    const data = livingThingsData[Number(slug) - 1];

    return (
        <div className={styles.container}>
          <Link href="/">{"<< Back to Home"}</Link>
  
          <div className={styles.thingContainer}>
            <div className={styles.thing}>
              <div className={styles.leftSide}>
                <img src={ baseUrl+ data.imgUrl} alt={data.name} />
              </div>
              <div className={styles.rightSide}>
                <div className={styles.header}>
                  <h2>
                    {data?.name}{" "}
                    <span>#{data?.id.toString().padStart(4, "0")}</span>
                  </h2>
                  <p>{data.description}</p>
                </div>
                <div className={styles.details}>
                  <div>
                    <p>age:</p>
                    <p>{data.age}</p>
                  </div>
                  <div>
                    <p>species: </p>
                    <p>
                      {data.species} {getSpeciesEmoji(data?.species)}
                    </p>
                  </div>
                  <div>
                    <p>height:</p>
                    <p>
                      {Math.floor(data.height / 12)}' {data.height % 12}"{" "}
                    </p>
                  </div>
  
                  <div>
                    <p>gender:</p>
                    <p>{data.gender}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div>
            <h2> Other Things</h2>
            <div className={styles.otherThings}>
              {data &&
                livingThingsData
                  .filter(({ id }) => id !== data?.id)
                  .map((thing) => {
                    return <ThingCard {...thing} key={thing.id + thing.name} />;
                  })}
            </div>
          </div>
        </div>
    )
}