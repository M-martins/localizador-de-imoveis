let arcgisIdentityManager = null;
let arcgisServerInfo = null;

function loadArcGISAuthModules() {
  return new Promise((resolve, reject) => {
    require([
      "esri/identity/IdentityManager",
      "esri/identity/ServerInfo"
    ], function (IdentityManager, ServerInfo) {
      arcgisIdentityManager = IdentityManager;
      arcgisServerInfo = ServerInfo;
      resolve();
    }, reject);
  });
}

async function initializeAuth() {
  await loadArcGISAuthModules();

  const serverInfo = new arcgisServerInfo({
    server: APP_CONFIG.portalUrl,
    tokenServiceUrl: `${APP_CONFIG.portalUrl}/sharing/rest/generateToken`
  });

  arcgisIdentityManager.registerServers([serverInfo]);
}

async function loginWithPortal(username, password) {
  if (!arcgisIdentityManager) {
    await initializeAuth();
  }

  const credential = await arcgisIdentityManager.generateToken(
    arcgisServerInfo.fromJSON({
      server: APP_CONFIG.portalUrl,
      tokenServiceUrl: `${APP_CONFIG.portalUrl}/sharing/rest/generateToken`
    }),
    {
      username,
      password
    }
  );

  return credential;
}

function logoutPortal() {
  if (arcgisIdentityManager) {
    arcgisIdentityManager.destroyCredentials();
  }
}