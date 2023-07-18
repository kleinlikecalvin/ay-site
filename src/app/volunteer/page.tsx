import "./_styles.scss";
import VolunteerForm from "@/components/VolunteerForm";
import Opportunities from "@/components/Opportunities";

export const metadata = {
  title: "Volunteer",
  description: "...",
};

export default function Volunteer() {
  return (
    <div className="Volunteer">
      <h1>Volunteer Today!</h1>
      <VolunteerForm />
      <Opportunities />
    </div>
  );
}
