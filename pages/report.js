import ReportForm from "@/Components/ReportForm";
import Link from "next/link";

export default function ReportPage({ formValues }) {
  return (
    <div>
      <Link href={`/pitches/${formValues.reportedSlug}`}>
        ← Back to Calender
      </Link>
      <h2>report a team</h2>
      <ReportForm formValues={formValues} />
    </div>
  );
}
