import { useState } from "react"
import { Header } from "./components/Header"
import { Hero } from "./components/hero"
import {StickyNotes} from "./components/StickyNotes"
import NotesContext from "./hooks/notesContext"

interface NotesProps {
   title: string;
   description: string;
}

function App() {
   const [notes, setNotes] = useState<NotesProps[]>([]);
   return (
      <NotesContext.Provider value={{notes, setNotes}}>
         <Header />
         <Hero />
         <StickyNotes />
      </NotesContext.Provider>
   );   
}

export default App
