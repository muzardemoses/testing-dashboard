import "@/styles/globals.css";
import { Header, SideBar } from "@/Components";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <div className="flex h-screen overflow-hidden">
        <div className="z-30">
          <SideBar />
        </div>
        <div className="flex flex-col flex-grow overflow-auto min-h-screen h-max">
          <div className="sticky top-0 z-40">
            <Header />
          </div>
          <div className="flex-grow h-max">{page}</div>
        </div>
      </div>
    ));
  return getLayout(<Component {...pageProps} />);
}
