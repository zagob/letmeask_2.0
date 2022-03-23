import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import googleIconImg from "../assets/images/google-icon.svg";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { database, get, ref } from "../services/firebase";
import "../styles/auth.scss";

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle, signOutAuthenticate } = useAuth();
  const [roomCode, setRoomCode] = useState("");
  
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    navigate("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await get(ref(database, `/rooms/${roomCode}`));

    if (!roomRef.exists()) {
      return alert("Room does not exists");
    }

    if (roomRef.val().endedAt) {
      return alert("Room already closed");
    }

    navigate(`room/${roomCode}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Cre salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <button onClick={async () => await signOutAuthenticate()}>Sair</button>
        <div className="main-content">
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
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
