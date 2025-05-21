"use client";


import { useEffect, useState, useRef } from 'react';
import * as Tone from 'tone';

const beginnerPatterns = [
  { id: 1, title: '1-Beat Downstroke', description: 'One downstroke on beat 1.', pattern: ['D', '', '', '', '', '', '', ''] },
  { id: 2, title: '1 + 2 Downstrokes', description: 'Downstrokes on beats 1 and 2.', pattern: ['D', '', 'D', '', '', '', '', ''] },
  { id: 3, title: '1 + 2 with Up', description: 'Add an upstroke after beat 1.', pattern: ['D', 'U', 'D', '', '', '', '', ''] },
  { id: 4, title: 'Three Beat Groove', description: 'Downstrokes on 1, 2, 3.', pattern: ['D', '', 'D', '', 'D', '', '', ''] },
  { id: 5, title: '1 + 2 and 3', description: 'Add upstroke between 2 and 3.', pattern: ['D', '', 'D', 'U', 'D', '', '', ''] },
  { id: 6, title: 'D U D U D', description: 'Alternate strokes for groove.', pattern: ['D', 'U', 'D', 'U', 'D', '', '', ''] },
  { id: 7, title: 'D U Skip D', description: 'Introduce spacing after upbeat.', pattern: ['D', 'U', '', '', 'D', '', '', ''] },
  { id: 8, title: 'Full Quarter Downstrokes', description: 'Downstroke on each beat.', pattern: ['D', '', 'D', '', 'D', '', 'D', ''] },
  { id: 9, title: 'Quarter + Eighth Ending', description: 'Ending adds syncopation.', pattern: ['D', '', 'D', '', 'D', 'U', 'D', ''] },
  { id: 10, title: 'Syncopated Push', description: 'Push strums early.', pattern: ['D', '', 'D', 'U', 'D', 'U', 'D', ''] },
  { id: 11, title: 'Double Hit Ending', description: 'Upbeat before last beat.', pattern: ['D', '', 'D', 'U', 'D', '', 'D', ''] },
  { id: 12, title: 'Triplet Sync', description: 'Feel of three inside four.', pattern: ['D', 'U', 'D', 'U', 'D', '', 'D', ''] },
  { id: 13, title: 'Groove Builder', description: 'Downstrokes for structure.', pattern: ['D', 'U', 'D', '', 'D', '', 'D', ''] },
  { id: 14, title: 'Swinger', description: 'Swung upstroke ending.', pattern: ['D', 'U', 'D', '', 'D', 'U', 'D', ''] },
  { id: 15, title: 'All 8th Notes', description: 'Every strum hit for control.', pattern: ['D', 'U', 'D', 'U', 'D', 'U', 'D', 'U'] },

];

export default function StrummingPracticePage() {
    
  const [isPlayingIndex, setIsPlayingIndex] = useState<number | null>(null);
  const [tempo, setTempo] = useState(80);
  const [currentBeat, setCurrentBeat] = useState<number | null>(null);

  const patternLength = 8;

  const indexRef = useRef(0);
  const transportIdRef = useRef<number | null>(null);
  const isStartedRef = useRef(false);
const clickRef = useRef<InstanceType<typeof Tone.MetalSynth> | null>(null);
const strumRef = useRef<InstanceType<typeof Tone.Sampler> | null>(null);


  useEffect(() => {
    clickRef.current = new Tone.MetalSynth({
      frequency: 200,
      envelope: { attack: 0.001, decay: 0.1, release: 0.01 },
      harmonicity: 5.1,
      modulationIndex: 32,
      resonance: 4000,
      octaves: 1.5,
    }).toDestination();

    strumRef.current = new Tone.Synth({
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.001, decay: 0.05, sustain: 0.1, release: 0.05 },
    }).toDestination();

    return () => stopLoop();
  }, []);

  const stopLoop = () => {
    if (transportIdRef.current !== null) {
      Tone.Transport.clear(transportIdRef.current);
      transportIdRef.current = null;
    }
    Tone.Transport.stop();
    Tone.Transport.cancel();
    setIsPlayingIndex(null);
    setCurrentBeat(null);
  };

  const playPattern = async (patternIndex: number) => {
    if (!isStartedRef.current) {
      await Tone.start();
      isStartedRef.current = true;
    }

    stopLoop();
    indexRef.current = 0;
    setIsPlayingIndex(patternIndex);

    const pattern = beginnerPatterns[patternIndex].pattern;

    const repeat = (time: number) => {
      const currentIndex = indexRef.current % patternLength;
      setCurrentBeat(currentIndex);

      clickRef.current?.triggerAttackRelease('C6', '16n', time);

      const strum = pattern[currentIndex];
      if (strum) {
        strumRef.current?.triggerAttackRelease('C4', '16n', time);
      }

      indexRef.current++;
    };

    Tone.Transport.bpm.value = tempo;
    transportIdRef.current = Tone.Transport.scheduleRepeat(repeat, '8n');
    Tone.Transport.start();
  };

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">

      
<section className="max-w-6xl mx-auto px-6 py-10">
  <h1 className="text-3xl font-bold text-center mb-8">🎸 Mastering Strumming Patterns: <small>See Strumming Patterns in Action Below</small></h1>

  <div className="grid md:grid-cols-3 gap-6 mb-10">

    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">✅ Understanding Downstrokes</h2>
      <p className="text-sm text-gray-700 mb-2">Learn how to confidently hit the strings on every beat using downstrokes. This is your first step to developing clean rhythm and hand control.</p>
      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
        <li>Use relaxed motion from the elbow</li>
        <li>Focus on steady timing</li>
        <li>Practice on beats 1, then 1 & 2, then 1 2 3 4</li>
      </ul>
    </div>


    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">✅ Adding Upstrokes (Down-Up Strumming)</h2>
      <p className="text-sm text-gray-700 mb-2">Once you’re comfortable with downstrokes, we introduce upstrokes, played on the “&” between beats.</p>
      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
        <li>Use a loose wrist for upstrokes</li>
        <li>Keep the motion small and snappy</li>
        <li>Strum only the top 2–3 strings on the upstroke</li>
      </ul>
    </div>


    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">✅ Quarter Notes vs Eighth Notes</h2>
      <p className="text-sm text-gray-700 mb-2">
        <strong>Quarter Notes (1 2 3 4):</strong> One strum per beat.<br />
        <strong>Eighth Notes (1 & 2 & 3 & 4 &):</strong> Two strums per beat.
      </p>
      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
        <li>Quarter notes = steady and spacious</li>
        <li>Eighth notes = driving and groovy</li>
      </ul>
    </div>
  </div>


  <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-xl font-semibold mb-2">✅ Strumming with Subdivision Awareness</h2>
    <p className="text-sm text-gray-700 mb-4">
      Once you know how eighth notes work, you can begin experimenting with which beats you strum on — and more importantly, which ones you skip. This is how most real-world strumming patterns are formed.
    </p>
    <p className="text-sm text-gray-700">
      With that foundation in place, scroll down and begin practicing with each pattern. Each one includes visual timing, audio playback, and helpful descriptions. By the end of this series, you’ll be able to:
    </p>
    <ul className="text-sm text-gray-600 list-disc list-inside mt-2 space-y-1">
      <li>Strum confidently in time</li>
      <li>Switch between downstroke-only and syncopated patterns</li>
      <li>Build your own strumming patterns on the fly</li>
    </ul>
  </div>
</section>


      <h2 className="text-3xl font-bold mb-10 text-center">🎸 Strumming Practice</h2>
<div className="mt-10 text-center">
        <label className="block text-sm font-medium text-gray-700 mb-2">Tempo: {tempo} BPM</label>
        <input
          type="range"
          min="60"
          max="140"
          value={tempo}
          onChange={(e) => setTempo(Number(e.target.value))}
          className="w-full max-w-md mx-auto"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {beginnerPatterns.map((patternObj, idx) => (
          <div key={patternObj.id} className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-1">{patternObj.title}</h2>
            <p className="text-sm text-gray-600 mb-4 italic">{patternObj.description}</p>
            <div className="grid grid-cols-8 gap-4 text-center text-2xl font-mono mb-4">
              {['1', '&', '2', '&', '3', '&', '4', '&'].map((label, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-sm text-gray-500">{label}</span>
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded border transition
                      ${isPlayingIndex === idx && currentBeat === i ? 'bg-orange-500 text-white' : 'bg-orange-100'}`}
                  >
                    {patternObj.pattern[i] || ''}
                  </div>
                </div>
              ))}
            </div>
            {isPlayingIndex === idx ? (
              <button
                onClick={stopLoop}
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
              >
                Stop
              </button>
            ) : (
              <button
                onClick={() => playPattern(idx)}
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
              >
                Play
              </button>
            )}
          </div>
        ))}
      </div>

      
      <p>Unlock Rhythm, Groove, and Feel with Confidence
Strumming is more than just moving your hand over the strings — it’s where rhythm, timing, and musicality meet. Whether you're playing a quiet ballad or driving a rock anthem, your strumming pattern controls the energy of the song.</p> 

<p>This page introduces you to essential strumming patterns every guitarist should know. From simple quarter note downstrokes to more intricate eighth note combinations with upstrokes, you'll learn not just how to strum, but how to feel the groove and stay locked in with any beat.</p>
    </section>
  );
}
