import { toast, Toaster } from "react-hot-toast";
import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";

type RoomCodeProps = {
  code?: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(`${props.code}`);
    toast.success("Codigo copiado com sucesso!");
  }
  return (
    <>
      <Toaster />
      <button className="room-code" onClick={copyRoomCodeToClipboard}>
        <div>
          <img src={copyImg} alt="Copiar codigo da sala" />
        </div>
        <span>Sala #{props.code}</span>
      </button>
    </>
  );
}
