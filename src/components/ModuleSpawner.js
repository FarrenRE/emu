import React from 'react';

const ModuleSpawner = ({ spawnChild, despawnChild }) => {
  return (
    <div className='module-spawner'>
      <button className='button' onClick={spawnChild} value='text'>Spawn text</button>
      <button className='button' onClick={spawnChild} value='text2'>Spawn text2</button>
      <button className='button' onClick={spawnChild} value='heading'>Spawn heading</button>
      <button className='button' onClick={spawnChild} value='content2'>Spawn content2</button>
      <button className='button' onClick={spawnChild} value='contentLeft'>Spawn content-left</button>
      <button className='button' onClick={spawnChild} value='banner'>Spawn banner</button>
      <button className='button' onClick={spawnChild} value='button1'>Spawn button1</button>
      <button className='button' onClick={spawnChild} value='button2'>Spawn button2</button>
      <button className='button is-danger' onClick={despawnChild}>Despawn module</button>
    </div>
  );
};

export default ModuleSpawner;