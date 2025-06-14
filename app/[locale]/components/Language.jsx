'use client'

const Language = () => {

  return (
    <div className="nav_lang">
      <button onClick={() => handleChange('en')}>EN</button>
      <button onClick={() => handleChange('fr')}>FR</button>
    </div>
  );
};

export default Language;