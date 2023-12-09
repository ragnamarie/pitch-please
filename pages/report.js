import ReportForm from "@/Components/ReportForm";
import Link from "next/link";

export default function ReportPage({ formValues }) {
  return (
    <div>
      <Link href="/pitches">← Back to Pitches</Link>
      <h2>report a team</h2>
      <ReportForm formValues={formValues} />
    </div>
  );
}
