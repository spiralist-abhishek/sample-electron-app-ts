import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { notesDocRef } from "../config/firebase";
import { useAuthContext } from "../context/AuthContextProvider";


export default function HomePage() {

  const { user } = useAuthContext();

	const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (user) {
      const uid = user.uid;
      onSnapshot(notesDocRef(uid), (snapshot) => {
        setNotes(snapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [user]);

	return (
		<>
			<main>
				<h1>Notes</h1>
				<ul>
					{notes.map((note) => (
						<li key={note.id}>{note.title || note.name}</li>
					))}
				</ul>
			</main>
		</>
	);
}
