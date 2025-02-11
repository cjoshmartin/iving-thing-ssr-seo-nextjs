/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './ThingCard.module.css';
import Link from 'next/link';

interface ThingCardProps {
    id: number;
    imgUrl: string;
    name: string;
    key: string;
}
const baseUrl = "https://cjoshmartin.github.io/react-spa-seo";

export function ThingCard(props:ThingCardProps) {

    return (
      <Link href={`/about/${props.id}`} key={props.key} className={styles.card}>
        <img src={baseUrl + props.imgUrl} alt={props.name} />
        <h2>{props.name}</h2>
        <Link href={"#"}>learn more about {props.name}</Link>
      </Link>
    );
}

export default ThingCard;