export default function taskBlock(trueOrFalse) {
    const task2 = true;
    const task = false;
    
    if (trueOrFalse) {
      const task = true;
      const task2 = false;
    }
  
    return [task, task2];
  }