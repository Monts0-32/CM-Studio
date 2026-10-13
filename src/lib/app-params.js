const isNode = typeof window === 'undefined';

const isClearAccessTokenRequested = () =>
	!isNode && new URLSearchParams(window.location.search).get("clear_access_token") === 'true';

const clearStoredAccessToken = () => {
	window.localStorage.removeItem('app_access_token');
	window.localStorage.removeItem('token');
}

const getAccessToken = () => {
	if (isNode) return undefined;
	return window.localStorage.getItem('app_access_token') || window.localStorage.getItem('token') || undefined;
}

const getAppParams = () => {
	if (isClearAccessTokenRequested()) {
		clearStoredAccessToken();
	}
	return {
		appId: import.meta.env.VITE_APP_ID,
		token: getAccessToken(),
		functionsVersion: import.meta.env.VITE_FUNCTIONS_VERSION,
		appBaseUrl: import.meta.env.VITE_APP_BASE_URL,
	}
}

export const appParams = {
	...getAppParams()
}