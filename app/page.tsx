import Landing from "@/components/Landing";

import Nav from "@/components/ui/Nav";

import About from "@/components/About";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Landing />
      <Nav />

      <About />
      <Mission />
      <Contact />
    </>
  );
}
