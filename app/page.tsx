import Image from "next/image";

import { gsap } from "gsap";

import Landing from "@/components/Landing";

import Nav from "@/components/ui/Nav";

import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Landing />
      <Nav />

      <About />
    </>
  );
}
