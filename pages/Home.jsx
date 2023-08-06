import React from 'react'
import { BiSearchAlt } from "react-icons/bi"

export default function HomePage() {
    
    const [search, setSearch] = React.useState("")
    const [searched, setSearched] = React.useState("")
    const [word, setWord] = React.useState("")
    const firstRender = React.useRef(true)
    
    function handleSubmit() {
        event.preventDefault()
        if(search){
            setSearched(search)
        } else {
            alert("No Data!")
        }
    }
    
        React.useEffect(() => {
            if (firstRender.current) {
            firstRender.current = false
        } else {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searched}`)
            .then(response => response.json())
            .then(data => setWord(data[0]))
        }},[searched])
    
    console.log(word)
    
    const wordList = []
    function addWord() {
        wordList.push(word)
        console.log("added")
        console.log(wordList)
    }
    
  return (
    <main >
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input className="searchbox" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="search-btn" type="submit"><BiSearchAlt/></button>
      </form>
    </div>
    {word ?
       <div className="dictionary-container">
            <div className="word-container">
                <div>
                    <h1>{word.word}</h1>
                    <p className="phonetic">{word.phonetic}</p>
                </div>
                <div>
                </div>
            </div>
            <hr/>
            {word.meanings.map((meaning) =>
                meaning.definitions.map((definition, index) => (
            <div>
                <p key={index}>{`${meaning.partOfSpeech}`}</p> 
                <p>{`${definition.definition}`}</p>
                <p>{definition.example ? `example: ${definition.example}`: null}</p>
            </div>
            ))
        )}
        </div> : null}
        </main>
  )
}