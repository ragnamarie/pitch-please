import ReportForm from "@/Components/ReportForm";
import Link from "next/link";
import { WrapperTwo } from "../styledPages";

export default function ReportPage({ formValues }) {
  return (
    <WrapperTwo>
      <Link href={`/pitches/${formValues.reportedSlug}`}>
        ← Back to Calender
      </Link>
      <h2>Report a team</h2>
      <ReportForm formValues={formValues} />
    </WrapperTwo>
  );
}
