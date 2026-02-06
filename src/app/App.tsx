import { Hero } from "@/app/components/Hero";
import { InstructorPreview } from "@/app/components/InstructorPreview";
import { WhyNow } from "@/app/components/WhyNow";
import { ChooseYourGoal } from "@/app/components/ChooseYourGoal";
import { ProgramArchitecture } from "@/app/components/ProgramArchitecture";
import { TargetAudience } from "@/app/components/TargetAudience";
import { Formats } from "@/app/components/Formats";
import { About } from "@/app/components/About";
import { TestimonialsInstructor } from "@/app/components/TestimonialsInstructor";
import { HowToStart } from "@/app/components/HowToStart";
import { ProgramStructure } from "@/app/components/ProgramStructure";
import { TestimonialsResults } from "@/app/components/TestimonialsResults";
import { Footer } from "@/app/components/Footer";
import { TestimonialsTransformation } from "@/app/components/TestimonialsTransformation";
import { TestimonialsCarousel } from "@/app/components/TestimonialsCarousel";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <InstructorPreview />
      <WhyNow />
    <TestimonialsTransformation />
      <ChooseYourGoal />
      
      <ProgramArchitecture />
      <TargetAudience />
      <Formats />
      <About />
      <TestimonialsCarousel />
      <TestimonialsInstructor />
      <HowToStart />
      <ProgramStructure />
      <TestimonialsResults />
      <Footer />
    </div>
  );
}