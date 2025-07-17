import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#fff",
        zIndex: 9999,
      }}
    >
      <ClipLoader color="#708037" size={50} />
    </div>
  );
}
