import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import googleIconImg from "../../assets/images/google-icon.svg";
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { useDarkMode } from "../../hooks/useDarkMode";
import { database, get, ref } from "../../services/firebase";
import { PageAuth } from "./styles";

export function Home() {
  const navigate = useNavigate();
  const { toggle, setToggle } = useDarkMode();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await get(ref(database, `/rooms/${roomCode}`));

    if (!roomRef.exists()) {
      return toast.error("Room does not exists");
    }

    if (roomRef.val().endedAt) {
      return toast.error("Room already closed");
    }

    navigate(`room/${roomCode}`);
  }

  return (
    <PageAuth>
      <Toaster />
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <div>
            {toggle === "light" && (
              <button onClick={() => setToggle("dark")}>dark</button>
            )}
            {toggle === "dark" && (
              <button onClick={() => setToggle("light")}>light</button>
            )}
          </div>
          <img src={logoImg} alt="Letmeask" />
          {!user && (
            <button onClick={handleCreateRoom} className="create-room">
              <img src={googleIconImg} alt="Logo do Google" />
              Crie sua sala com o Google
            </button>
          )}
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit" disabled={roomCode.length === 0}>
              Entrar na sala
            </Button>
            <Button style={{ background: 'var(--pink)' }} onClick={() => navigate('/available/rooms')}>Salas disponíveis</Button>
          </form>
        </div>
      </main>
    </PageAuth>
  );
}
