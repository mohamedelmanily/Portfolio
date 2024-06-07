import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { IconBriefcase, IconBriefcase2, IconBriefcase2Filled, IconHome, IconUser } from "@tabler/icons-react";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <IconBriefcase2 className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
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
