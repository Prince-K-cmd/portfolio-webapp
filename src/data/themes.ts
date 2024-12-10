import { Theme } from '../types/Theme';

export const themes: Theme[] = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    colors: {
      primary: 'bg-cyan-500',
      accent: 'bg-purple-500',
      text: 'text-gray-50',
      subText: 'text-gray-300',
      background: 'bg-gray-900',
      surface: 'bg-gray-800',
      border: 'border-cyan-500/30',
      focus: 'ring-cyan-500'
    }
  },
  {
    id: 'matrix',
    name: 'Matrix',
    colors: {
      primary: 'bg-green-500',
      accent: 'bg-emerald-400',
      text: 'text-green-50',
      subText: 'text-green-200',
      background: 'bg-black',
      surface: 'bg-green-950',
      border: 'border-green-500/30',
      focus: 'ring-green-500'
    }
  },
  {
    id: 'quantum',
    name: 'Quantum',
    colors: {
      primary: 'bg-blue-600',
      accent: 'bg-teal-400',
      text: 'text-gray-50',
      subText: 'text-gray-300',
      background: 'bg-slate-900',
      surface: 'bg-slate-800',
      border: 'border-blue-500/30',
      focus: 'ring-blue-500'
    }
  }
];