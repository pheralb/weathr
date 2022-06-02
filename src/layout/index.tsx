import Header from "@/layout/header";
import Footer from "./footer";

type Props = {
  children?: React.ReactNode;
};

const Index = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Index;
