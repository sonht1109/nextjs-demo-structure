import React from "react";
import Link from "next/link";
import SLink from "../../src/components/Link";
import HomeWrapper from "./store/style";

export default function Home() {
  return (
    <HomeWrapper>
      <p>This is home</p>
      <Link href="/expert/login">
        <SLink>Expert login</SLink>
      </Link>
      <br></br>
      <Link href="/user/login">
        <SLink>User login</SLink>
      </Link>
      <p>{process.env.customKey}</p>
    </HomeWrapper>
  );
}
