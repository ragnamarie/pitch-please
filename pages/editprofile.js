import useSWR from "swr";
import ProfileForm from "@/Components/ProfileForm";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { WrapperTwo } from "../styledPages";

export default function EditProfilePage() {
  const { data: session, status } = useSession();

  const { data, isLoading, mutate } = useSWR(
    session ? `api/users/${session.user?.googleId}` : null
  );

  const router = useRouter();

  async function handleEditProfile(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const club = formData.get("club");
    const manager = formData.get("manager");

    const response = await fetch(`/api/users/${data.googleId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clubName: club,
        managerName: manager,
      }),
    });

    console.log(response);

    if (response.ok) {
      mutate();
    }
    router.push("/account");
  }

  if (isLoading) return <p>Loading...</p>;

  if (status === "authenticated") {
    return (
      <WrapperTwo>
        <Link href="/account">← Back to Account</Link>
        <ProfileForm user={data} onEditProfile={handleEditProfile} />
      </WrapperTwo>
    );
  }
}
