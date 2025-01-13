import InvitePageClient from "@/app/invite/page";

export async function generateStaticParams() {
  return [
    { workspaceId: "1" },
  ];
}

export default function InvitePage({ params }: { params: { workspaceId: string } }) {
  return <InvitePageClient workspaceId={params.workspaceId} />;
}
