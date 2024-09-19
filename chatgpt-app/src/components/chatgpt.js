"use client"
//import { useClient } from 'next/client';
import React, { useState } from 'react';
import { OpenAI } from 'openai';


const openai = new OpenAI({
  apiKey: 'org-PFNdJQI3tH1kkGHjJ3el2IuN',
  project:'$PROJECT_ID',
  dangerouslyAllowBrowser: true
});

const ChatGPT = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  //const client = useClient();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: input }],
      });
      setOutput(response.data.choices[0].message.content);
    } catch (error) {
      console.error('Failed to generate completion:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
      <div>{output}</div>
    </div>
  );
};

export default ChatGPT;
