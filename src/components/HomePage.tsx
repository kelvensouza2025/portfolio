import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata = {
  title: "Página Inicial",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col px-6 gap-20">
        <ProjectsSection />
      </div>

      <ContactSection />
    </div>
  );
}
