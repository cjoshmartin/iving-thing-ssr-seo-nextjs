import styles from "./page.module.css";
import ThingContainer from "@/components/ThingContainer/ThingContainer";
import ThingCard from "@/components/ThingCard/ThingCard";
import { livingThingsData } from "@/data";


export async function generateMetadata({}) {

  return {
    title: "Home - Living Things",
    description: "Welcome to the Living Things site! Here, you will find information about all the living things in Josh's house.",
    openGraph: {
      title: "Welcome to the Living Things site! Here, you will find information about all the living things in Josh's house.",
      type: "website",
      url: "https://iving-thing-ssr-seo-nextjs.vercel.app/",
      images: [
        {
          url: "https://m.media-amazon.com/images/I/71QhWAqNFOL._AC_UF1000,1000_QL80_.jpg",
        },
      ],
      site_name: "Living Things",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Welcome to the Living Things site! Here, you will find information about all the living things in Josh's house.",
      image: "https://m.media-amazon.com/images/I/71QhWAqNFOL._AC_UF1000,1000_QL80_.jpg",
    },
    alternates: {
      canonical: "https://iving-thing-ssr-seo-nextjs.vercel.app/",
    },
  };

}

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <div className="App">
      <h1>Living Things</h1>
      <p>
        Welcome to the Living Things site! Here, you will find information about
        all the living things in Josh's house. From the plants that adorn the
        living room to the pets that bring joy and companionship, each living
        thing has its own story and unique characteristics. Explore the
        different sections of the site to learn more about these fascinating
        living things. Click on the links to discover interesting facts, care
        tips, and personal anecdotes about each one. Whether you're a plant
        enthusiast or an animal lover, there's something here
      </p>
      <br />
        <div className={styles.home}>
        <ThingContainer>
            {livingThingsData.map((thing) => {
                return (
                    <ThingCard key={thing?.id + thing.name} {...thing} />
                )
            })}
        </ThingContainer>
</div>
</div>

        
      </main>
    </div>
  );
}
