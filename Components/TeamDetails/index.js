import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import BookedSlots from "../BookedSlots";
import AvailableSlots from "../AvailableSlots";

export default function TeamDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/teams/${id}`);

  if (isLoading) {
    return <h1>kick-off is just around the corner...</h1>;
  }

  if (!data) {
    return;
  }

  console.log(data);

  return (
    <>
      <Link href="/club">← Back to List</Link>
      <h1>{data.name}</h1>
      <BookedSlots bookedTimeSlots={data.bookedTimeSlots} />
      <AvailableSlots />
    </>
  );
}
