import React from "react";
import SHeader from "./style";
import Link from "next/link";

export default function Header() {
  return (
    <SHeader>
      <div className="logo">
        <Link href="/home">
          <a><img src="/images/vercel.svg" alt="logo" /></a>
        </Link>
      </div>
      <div className="menu">
        <Link href="/home/introduce">
          <a>Introduce</a>
        </Link>
        <a>Contact</a>
        <a>Join</a>
      </div>
    </SHeader>
  );
}
