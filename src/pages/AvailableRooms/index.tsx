import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/logo.svg";
import { useRooms } from "../../hooks/useRooms";
import { Container, Grid, GridRooms, NameRoom } from "./styles";

export function AvailableRooms() {
  const navigate = useNavigate();
  const { room } = useRooms();

  function handleNavigateAvailableRoom(roomCode: string) {
    navigate(`/room/${roomCode}`);
  }
  return (
    <Container>
      <div className="top">
        <img src={logoImg} alt="logo" onClick={() => navigate("/")} />
      </div>

      <GridRooms>
        {room
          .filter((item) => !item.endedAt)
          .map((item) => (
            <Grid
              key={item.authorId}
              onClick={() => handleNavigateAvailableRoom(item.id)}
            >
              <NameRoom>{item.title}</NameRoom>
            </Grid>
          ))}
      </GridRooms>
    </Container>
  );
}
