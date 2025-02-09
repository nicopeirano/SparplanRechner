"use client";
import { useState } from "react";

export default function Home() {
  const [startbetrag, setStartbetrag] = useState<number>(1000);
  const [prozentsatz, setProzentsatz] = useState<number>(5);
  const [jahre, setJahre] = useState<number>(10);
  const [endbetrag, setEndbetrag] = useState<number | null>(null);

  const berechneEndbetrag = () => {
    const faktor = 1 + prozentsatz / 100;
    const result = startbetrag * Math.pow(faktor, jahre);
    setEndbetrag(parseFloat(result.toFixed(2)));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-6">Sparplan Rechner</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700">Startbetrag  (CHF)</label>
          <input 
            type="text" 
            value={startbetrag} 
            onChange={(e) => setStartbetrag(Number(e.target.value))} 
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Zinssatz (%)</label>
          <input 
            type="number" 
            value={prozentsatz} 
            onChange={(e) => setProzentsatz(Number(e.target.value))} 
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Anlagezeitraum (Jahre)</label>
          <input 
            type="number" 
            value={jahre} 
            onChange={(e) => setJahre(Number(e.target.value))} 
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button 
          onClick={berechneEndbetrag} 
          className="btn btn-primary"
        >
          Berechnen
        </button>
        {endbetrag !== null && (
          <p className="mt-4 text-lg font-bold text-center">Endbetrag: {endbetrag} CHF</p>
        )}
      </div>
      
    </div>
    
  );
}
