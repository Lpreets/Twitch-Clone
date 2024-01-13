import Navbar from "./_componenets/navbar";
import Sidebar, { SidebarSkeleton } from "./_componenets/sidebar";
import Container from "./_componenets/container";
import { Suspense } from "react";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
