import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/recentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col text-white overflow-hidden p-5 m-auto sm:px-10">
      <div>
        <Hero />
        <FloatingNav navItems={[{
          name: "Home",
          link: "/",
          icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "About",
          link: "/about",
          icon: <FaUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Contact",
          link: "/contact",
          icon: <FaMessage className="h-4 w-4 text-neutral-500 dark:text-white" />

        },
        ]} />
        <Grid />
        <RecentProjects/>
      </div>
    </main>
  );
}
