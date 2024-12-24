import { useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------

function usePreviousLocation() {
  const location = useLocation();
  const prevLocationRef = useRef(null);

  useEffect(() => {
    prevLocationRef.current = location;
  }, [location]);

  return prevLocationRef.current;
}

export function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousLocation = usePreviousLocation();

  const router = useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      reload: () => window.location.reload(),
      push: (href, state) => navigate(href, { state }),
      replace: (href, state) => navigate(href, { replace: true, state }),
      query: new URLSearchParams(location.search),
      previousLocation
    }),
    [navigate, location.search, previousLocation]
  );

  return router;
}
