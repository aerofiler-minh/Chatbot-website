import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Dictaphone = ({handleChange}) => {
  const { transcript } = useSpeechRecognition()
  const [msg, setMsg] = useState("")

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  const handleStart = (e) => {
    e.preventDefault();
    SpeechRecognition.startListening();
    setMsg("Recording ...")
  }

  const handleStop = (e) => {
    e.preventDefault();
    SpeechRecognition.stopListening();
    handleChange(transcript)
    setMsg("")
  }

  return (
    <div className="recording">
      <button className="myButton" onClick={handleStart}>Start Recording</button>
      <button className="myButton" onClick={handleStop}>Stop Recording</button>
      <p className="status">{msg}</p>
    </div>
  )
}
export default Dictaphone