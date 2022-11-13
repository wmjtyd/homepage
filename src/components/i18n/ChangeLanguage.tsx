import Link from 'next/link';
import { useRouter } from 'next/router';

import { languages } from './resource';

export const ChangeLanguage = () => {
  const router = useRouter();
  console.log('router', router);
  return (
    <div className="dropdown-hover dropdown text-white">
      <label className="btn m-1 text-white">{languages.find(val => val.type === router.locale)?.label || 'English'}</label>
      <ul className="dropdown-content menu rounded-box w-52 bg-base-200 p-2 shadow">
        {languages.map((v) => (
          <li key={v.type}>
            <Link href={`/${v.type}${router.asPath}`} locale={v.type}>
              <a>{v.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
