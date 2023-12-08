import ReportForm from "@/Components/ReportForm";
import Link from "next/link";

export default function ReportPage() {
  return (
    <div>
      <Link href="/pitches">← Back to Pitches</Link>
      <h2>report a team</h2>
      <ReportForm />
    </div>
  );
}
