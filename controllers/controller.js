import axios from "axios";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import User from "../models/userModels.js";
import sendEmails from "../services/sendEmails.js";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export const register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);
    const apiKey = crypto.randomBytes(32).toString('hex');
    
    const user = await User.create({ nome, email, senha: hashedPassword, apiKey });
    res.status(200).json({ message: "registro feito com sucesso! sua API key foi enviada para seu email!" });
    await sendEmails(email, apiKey);
  }catch(error){
    res.status(400).json({ error: "erro ao fazer o login" });
    console.error("erro ao fazer o login", error)
  };
};

export const query = async (req, res) => {
   const { text } = req.body;
  
  try {
   const data = {
     contents: [
      {
       parts: [
        {
          text: `${text}`
        }
       ]
      }
    ]
   };
   
   const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, data,
    {
      headers: {
        "Content~Type":"application/json"
      }
    });
    
    const textContent = response.data.candidates[0]?.content?.parts[0]?.text;
    res.status(200).json({ message: textContent });
  }catch(error){
    res.status(400).json("erro interno do servidor");
    console.error("erro ao fazer a requisição: ", error);
  };
};