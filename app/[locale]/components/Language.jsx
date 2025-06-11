'use client'
import { usePathname, useRouter } from 'next/navigation';

const Language = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (lng) => {
    const segments = pathname.split('/');
    segments[1] = lng;
    router.replace(segments.join('/'));
  };

  return (
    <div className="nav_lang">
      <button onClick={() => handleChange('en')}>EN</button>
      <button onClick={() => handleChange('fr')}>FR</button>
    </div>
  );
};

export default Language;