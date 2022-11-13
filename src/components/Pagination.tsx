import { useTranslation } from 'react-i18next';

interface IPaginationState {
  page: {
    current: number;
    limit: number;
  };
  length: number;
  setPage: (options: { current: number; limit: number }) => void;
}

export const Pagination = ({ page, setPage, length }: IPaginationState) => {
  const { t } = useTranslation(['common']);
  const { current, limit } = page;
  const lastPage = length % limit === 0 ? Math.floor(length / limit) : Math.floor(length / limit) + 1;

  return (
    <div className="bg-theme-white border-theme-200 flex items-center justify-between border-t px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          onClick={() =>
            setPage({
              current: current - 1,
              limit,
            })
          }
          className="text-theme-white bg-theme-white bg-hover-theme-gray relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium"
        >
          {t('Previous')}
        </a>
        <a
          onClick={() =>
            setPage({
              current: current + 1,
              limit,
            })
          }
          className="text-theme-white bg-theme-white bg-hover-theme-gray relative ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium"
        >
          {t('Next')}
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-theme-white text-sm">
            {t('Showing {{from}} to {{to}} of {{length}} results', {
              from: (current - 1) * limit + 1,
              to: current * limit,
              length,
            })}
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex cursor-pointer -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {current > 1 && (
              <a
                onClick={() =>
                  setPage({
                    current: current - 1,
                    limit,
                  })
                }
                className="bg-theme-white text-theme-white relative inline-flex items-center rounded-l-md border border-gray-300 px-2 py-2 text-sm font-medium hover:bg-gray-400"
              >
                <span className="sr-only">{t('Previous')}</span>
              </a>
            )}
            {current > 2 && (
              <a
                onClick={() =>
                  setPage({
                    current: 1,
                    limit,
                  })
                }
                className="bg-theme-white text-theme-white bg-hover-theme-gray relative inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium"
              >
                1
              </a>
            )}
            {current > 2 && (
              <span className="bg-theme-white text-theme-black relative inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium">
                ...
              </span>
            )}
            {current > 1 && (
              <a
                onClick={() =>
                  setPage({
                    current: current - 1,
                    limit,
                  })
                }
                className="bg-theme-white text-theme-white bg-hover-theme-gray relative hidden items-center border border-gray-300 px-4 py-2 text-sm font-medium md:inline-flex"
              >
                {current - 1}
              </a>
            )}
            <span className="text-theme-white relative inline-flex items-center border border-gray-300 bg-gray-400 px-4 py-2 font-medium">
              {current}
            </span>
            {current < lastPage - 1 && (
              <a
                onClick={() =>
                  setPage({
                    current: current + 1,
                    limit,
                  })
                }
                className="bg-theme-white text-theme-white bg-hover-theme-gray relative hidden items-center border border-gray-300 px-4 py-2 text-sm font-medium md:inline-flex"
              >
                {current + 1}
              </a>
            )}
            {current < lastPage - 2 && (
              <span className="bg-theme-white text-theme-black relative inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium">
                ...
              </span>
            )}
            {current < lastPage && (
              <a
                onClick={() =>
                  setPage({
                    current: lastPage,
                    limit,
                  })
                }
                className="bg-theme-white text-theme-white bg-hover-theme-gray relative inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium"
              >
                {lastPage}
              </a>
            )}
            {current < lastPage && (
              <a
                onClick={() =>
                  setPage({
                    current: current + 1,
                    limit,
                  })
                }
                className="bg-theme-white text-theme-white bg-hover-theme-gray relative inline-flex items-center rounded-r-md border border-gray-300 px-2 py-2 text-sm font-medium"
              >
                <span className="sr-only">{t('Next')}</span>
              </a>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};
