import React from "react";
import Link from "next/link";
import SLink from "../../src/components/Link";

export default function Home() {
  return (
    <div>
      <p>This is home</p>
      <Link href="/expert/login">
        <SLink>Expert login</SLink>
      </Link>
      <br></br>
      <Link href="/user/login">
        <SLink>User login</SLink>
      </Link>
    </div>
  );
}
