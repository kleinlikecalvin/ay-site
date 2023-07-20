import "./_GlobalDonate.scss";
import Drawer from "./Drawer";
import Button from "./Button";

export default function GlobalDonate() {
  return (
    <Drawer
      closedContent={
        <h3>
          Support young artists by helping us offer cash grants!{" "}
          <Button bgColor="#fff" textColor="#212121">
            Donate
          </Button>
        </h3>
      }
      openContent={
        <div className="GlobalDonate">
          <div
            style={{ background: "red", height: "100px", width: "100px" }}
          ></div>
          <div
            style={{ background: "blue", height: "100px", width: "100px" }}
          ></div>
        </div>
      }
    />
  );
}
