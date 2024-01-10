import Navbar from "./_componenets/navbar";
import Sidebar from "./_componenets/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default BrowseLayout;
