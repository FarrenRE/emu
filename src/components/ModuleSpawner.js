import React from 'react';

const ModuleSpawner = ({ spawnChild, despawnChild }) => {
  return (
    <div className='module-spawner'>
      <h1>Content</h1>
      <div className='module-spawner__group'>
        <button className='button' onClick={spawnChild} value='text'>Text block</button>
        <button className='button' onClick={spawnChild} value='text2'>Text | Text</button>
        <button className='button' onClick={spawnChild} value='content2'>Content | Content</button>
        <button className='button' onClick={spawnChild} value='contentLeft'>Image | Content</button>
        <button className='button' onClick={spawnChild} value='heading'>Heading</button>
        <button className='button' onClick={spawnChild} value='banner'>Banner</button>
      </div>
      <h1>Button</h1>
      <div className='module-spawner__group'>
        <button className='button' onClick={spawnChild} value='button1'>Button</button>
        <button className='button' onClick={spawnChild} value='button2'>Button | Button</button>
      </div>
      <h1>Dates</h1>
      <div className='module-spawner__group'>
        <button className='button' onClick={spawnChild} value='calendar'>Course Calendar</button>
        <button className='button' onClick={spawnChild} value='dynamicContentCourses'>Dynamic Content: Regional Course Calendar</button>
        <br />
        <button className='button' onClick={spawnChild} value='dateBlock'>Date Block</button>
        <button className='button' onClick={spawnChild} value='dynamicContentEvents'>Dynamic Content: What's On Date Block</button>
      </div>
      <h1>Action</h1>
      <div className='module-spawner__group'>
        <button className='button is-danger' onClick={despawnChild}>Despawn module</button>
      </div>
    </div>
  );
};

export default ModuleSpawner;