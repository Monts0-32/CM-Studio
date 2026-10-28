import { useEffect, useState } from 'react'
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Home from '@/pages/Home';
import SiteLock, { clearSiteUnlocked, isSiteUnlocked, markSiteUnlocked } from '@/components/agency/SiteLock';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  // Site-wide development lock — remove this gate (and the SiteLock import)
  // once the site is ready to launch.
  const [siteUnlocked, setSiteUnlocked] = useState(isSiteUnlocked);

  const unlockSite = () => {
    markSiteUnlocked();
    setSiteUnlocked(true);
    console.log("%cCM Studios: site unlocked.", "color:#7cc4f0;font-weight:bold");
  };

  const lockSite = () => {
    clearSiteUnlocked();
    setSiteUnlocked(false);
    console.log("%cCM Studios: site locked again.", "color:#7cc4f0;font-weight:bold");
  };

  // Admin console helpers: run `cmUnlock()` in the browser console to open the
  // site, `cmLock()` to put it back behind the holding page.
  useEffect(() => {
    window.cmUnlock = unlockSite;
    window.cmLock = lockSite;
    return () => {
      delete window.cmUnlock;
      delete window.cmLock;
    };
  }, []);

  if (!siteUnlocked) {
    return <SiteLock />;
  }

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
