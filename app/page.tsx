import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col text-white overflow-hidden p-5 m-auto sm:px-10">
      <div>
        <Hero />
        <FloatingNav navItems={navItems}/>
        <Grid />
        <RecentProjects/>
        <Footer/>
      </div>
    </main>
  );
}
