import { useEffect, useState } from "react";
import { database, off, onValue, ref } from "../services/firebase";
import { useAuth } from "./useAuth";

type FirebaseRooms = Record<
  string,
  {
    id: string;
    authorId: string;
    title: string;
    endedAt: Date;
    questions: React.SetStateAction<RoomProps[]>;
  }
>;

type RoomProps = {
  id: string;
  authorId: string;
  title: string;
  endedAt: Date;
  questions: React.SetStateAction<RoomProps[]>;
};

export function useRooms() {
  const { user } = useAuth();
  const [room, setRoom] = useState<RoomProps[]>([]);

  useEffect(() => {
    const roomsRef = ref(database, "rooms");
    onValue(roomsRef, (snapshot) => {
      const databaseRoom = snapshot.val();

      const firebaseQuestions: FirebaseRooms = databaseRoom ?? {};

      console.log(
        "fire",
        Object.entries(firebaseQuestions).map(([key, value]) => key)
      );

      const parsedQuestion = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            ...value,
            id: key,
            // questions: Object.entries(firebaseQuestions.questions).map(([key, value]) => {
            //   return {
            //     // ...value

            //   }
            // })
          };
        }
      );

      setRoom(parsedQuestion);
    });

    return () => {
      off(roomsRef, "value");
    };
  }, [user?.id]);

  return { room };
}
