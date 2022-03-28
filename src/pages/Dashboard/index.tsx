import { AiOutlinePoweroff } from "react-icons/ai";
import { GoSignIn } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useRooms } from "../../hooks/useRooms";
import { FormatDate } from "../../utils/formatDate";
import {
  Container,
  ListRoomClose,
  ListRoomOpen,
  Main,
  Menu,
  Profile,
  Rooms
} from "./styles";

export function Dashboard() {
  const { user, signOutAuthenticate } = useAuth();
  const { room } = useRooms();
  const navigate = useNavigate();
  // console.log(room.map(item => item.questions));
  return (
    <>
      <Container>
        <Menu>
          <Profile>
            <img src={user?.avatar} alt={user?.name} />
            <span>{user?.name}</span>
          </Profile>
          <button onClick={async () => await signOutAuthenticate()}>
            <AiOutlinePoweroff size={22} title="sair" />
          </button>
        </Menu>
        <Main>
          <ListRoomOpen>
            <h2>Salas em aberto</h2>

            {room
              .filter((item) => !item.endedAt)
              .map((item) => (
                <Rooms key={item.title}>
                  <h3>{item.title}</h3>

                  <div>
                    <GoSignIn
                      size={22}
                      title="Entrar na sala"
                      onClick={() => navigate(`/admin/room/${item.id}`)}
                    />
                  </div>
                </Rooms>
              ))}
          </ListRoomOpen>

          <ListRoomClose>
            <h2>Salas finalizadas</h2>

            {room
              .filter((item) => item.endedAt)
              .map((item) => (
                <Rooms key={item.title}>
                  <div>
                    <h3>{item.title}</h3>
                    <span>{FormatDate(item.endedAt)}</span>
                  </div>
                </Rooms>
              ))}
          </ListRoomClose>
        </Main>
      </Container>
    </>
  );
}
