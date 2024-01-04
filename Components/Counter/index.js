import { useSession } from "next-auth/react";
import useSWR from "swr";

export default function Counter({ availableSlotsCount }) {
  return <>available slots: {availableSlotsCount}</>;
}
