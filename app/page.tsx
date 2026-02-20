// Server component — renders the client-side landing page wrapper.
// Keeping page.tsx as a server component preserves Next.js streaming
// and future RSC data-fetching opportunities.
import LandingPage from "@/components/landing-page";

export default function Page() {
  return <LandingPage />;
}
